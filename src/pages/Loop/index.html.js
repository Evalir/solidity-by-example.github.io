const html = `<p>Looping in Solidity is tricky.</p>
<p>The number of iteration in a loop can grow and spend more gas than the
gas limit, causing your contract to stall.</p>
<p>There are two gas limits to keep in mind.</p>
<ul>
<li>Transcation gas limit, set by the caller.</li>
<li>Block gas limit</li>
</ul>
<p>Try to avoid writing loops that you cannot estimate the gas consumption.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.16;

contract Loop {
    uint public count;

    // This is a demonstration of transaction gas limit.
    // Try:
    // Set the gas limit to 100000 and loop(100).
    // It should throw an error after spending all the gas.
    function loop(uint n) public returns (uint) {
        for (uint i = 0; i &lt; n; i++) {
            count++;
        }

        return count;
    }
}
</code></pre>
`

export default html
