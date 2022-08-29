/**
 * todo list
 * @type {Todo[]}
 */
  const todos = [];

/**
 * Represents a todo item.
 * @typedef {Object} Todo
 * @property {number} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} complete - 완료 여부
 * @property {string} category - 카테고리
 * @property {Array.<string>} tags - 태그들(optional)
 */

/** @function createTodo
 * @description 할 일을 추가할 수 있다.
 * @param {string} content - 내용
 * @param {string} category - 카테고리
 * @property {Array.<string>} tags - 태그들(optional)
 * @todo 내용없이 추가할 수 없다.
 * @returns Todo
 */
function createTodo (content, category, tags) {}


/** @function getTodos
 * @description 모든 할 일을 조회할 수 있다.
 * @param {number} id - 아이디
 * @todo ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @returns Todo | todos
 */
function getTodos (id) {}


/** @function updateTodos
 * @description ID를 제외한 모든 속성을 수정할 수 있다.
 * @param {number} id - 아이디
 * @todo 특정 할 일의 특정 태그를 수정할 수 있다.
 */
function updateTodos (id) {}


/** @function deleteTodos
 * @description ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @param {number} id - 삭제할 todo ID
 * @todo 모든 할 일을 제거할 수 있다.
 * @todo 특정 할 일의 특정 태그를 삭제할 수 있다.
 * @todo 특정 할 일의 모든 태그를 제거할 수 있다.
 */
function deleteTodos (id) {}
