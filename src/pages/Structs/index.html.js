const html = `<p>You can define your own type by creating a <code>struct</code>.</p>
<p>They are useful for grouping togther related data.</p>
<pre><code class="language-solidity">pragma solidity ^0.5.16;

contract Todos {
    struct Todo {
        string text;
        bool completed;
    }

    // An array of &#39;Todo&#39; structs
    Todo[] public todos;

    function create(string memory _text) public {
        // 3 ways to initialize a struct
        // - calling it like a function
        todos.push(Todo(_text, false));

        // key value mapping
        todos.push(Todo({
            text: _text,
            completed: false
        }));

        // initialize an emoty struct and then update it
        Todo memory todo;
        todo.text = _text;
        // todo.completed initialized to false

        todos.push(todo);
    }

    // Solidity automatically created a getter for&#39; todos&#39; so
    // you don&#39;t actually need this function.
    function get(uint _index) public view
        returns (string memory text, bool completed)
    {
        Todo storage todo = todos[_index];
        return (todo.text, todo.completed);
    }

    // update text
    function update(uint _index, string memory _text) public {
        Todo storage todo = todos[_index];
        todo.text = _text;
    }
    // update completed
    function toggleCompleted(uint _index) public {
        Todo storage todo = todos[_index];
        todo.completed = !todo.completed;
    }
}
</code></pre>
`

export default html
