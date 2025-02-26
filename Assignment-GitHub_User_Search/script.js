async function searchUser() {
    const username = document.getElementById("username").value;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; 

    if (!username) {
        resultDiv.innerHTML = "<p style='color: red;'>Please enter a username.</p>";
        return;
    }

    try {
        let userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error("User not found");
        let userData = await userResponse.json();

        let reposResponse = await fetch(userData.repos_url);
        let reposData = await reposResponse.json();

        let totalCommits = 0;
        await Promise.all(reposData.map(async repo => {
            let commitsResponse = await fetch(repo.commits_url.replace("{/sha}", ""));
            let commitsData = await commitsResponse.json();
            totalCommits += commitsData.length;
        }));

        resultDiv.innerHTML = `
            <div class="profile">
                <img src="${userData.avatar_url}" alt="Profile Image">
                <h3>${userData.login}</h3>
                <p>Total Repositories: ${userData.public_repos}</p>
                <p>Total Commits: ${totalCommits}</p>
            </div>
        `;
    } catch (error) {
        resultDiv.innerHTML = "<p style='color: red;'>User not found.</p>";
    }
}