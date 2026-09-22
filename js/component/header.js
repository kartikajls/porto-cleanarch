export function Header() {
    return `
        <header class="container-header">
            <nav>
                <h1>Portfolio Portal</h1>

                <ul>
                    <li><a href="/index.html">Home</a></li>
                    <li class="drop-down"><a href="#">Project</a>
                        <ul class="isi-dropdown">
                            <li><a href="/page/frontend.html">Frontend Development</a></li>
                            <li><a href="/page/backend.html">Backend Development</a></li>
                            <li><a href="/page/da.html">Data Analytics</a></li>
                        </ul>
                    </li>
                    <li><a href="/page/contact.html">Contact</a></li>
                </ul>
            </nav>
        </header>

    `;
}