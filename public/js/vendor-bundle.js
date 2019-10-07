// Require vendor files here, using sprockets or snockets directives

/*!

 * jQuery JavaScript Library v3.3.1

 * https://jquery.com/

 *

 * Includes Sizzle.js

 * https://sizzlejs.com/

 *

 * Copyright JS Foundation and other contributors

 * Released under the MIT license

 * https://jquery.org/license

 *

 * Date: 2018-01-20T17:24Z

 */

( function( global, factory ) {



	"use strict";



	if ( typeof module === "object" && typeof module.exports === "object" ) {



		// For CommonJS and CommonJS-like environments where a proper `window`

		// is present, execute the factory and get jQuery.

		// For environments that do not have a `window` with a `document`

		// (such as Node.js), expose a factory as module.exports.

		// This accentuates the need for the creation of a real `window`.

		// e.g. var jQuery = require("jquery")(window);

		// See ticket #14549 for more info.

		module.exports = global.document ?

			factory( global, true ) :

			function( w ) {

				if ( !w.document ) {

					throw new Error( "jQuery requires a window with a document" );

				}

				return factory( w );

			};

	} else {

		factory( global );

	}



// Pass this if window is not defined yet

} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {



// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1

// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode

// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common

// enough that all such attempts are guarded in a try block.

"use strict";



var arr = [];



var document = window.document;



var getProto = Object.getPrototypeOf;



var slice = arr.slice;



var concat = arr.concat;



var push = arr.push;



var indexOf = arr.indexOf;



var class2type = {};



var toString = class2type.toString;



var hasOwn = class2type.hasOwnProperty;



var fnToString = hasOwn.toString;



var ObjectFunctionString = fnToString.call( Object );



var support = {};



var isFunction = function isFunction( obj ) {



      // Support: Chrome <=57, Firefox <=52

      // In some browsers, typeof returns "function" for HTML <object> elements

      // (i.e., `typeof document.createElement( "object" ) === "function"`).

      // We don't want to classify *any* DOM node as a function.

      return typeof obj === "function" && typeof obj.nodeType !== "number";

  };





var isWindow = function isWindow( obj ) {

		return obj != null && obj === obj.window;

	};









	var preservedScriptAttributes = {

		type: true,

		src: true,

		noModule: true

	};



	function DOMEval( code, doc, node ) {

		doc = doc || document;



		var i,

			script = doc.createElement( "script" );



		script.text = code;

		if ( node ) {

			for ( i in preservedScriptAttributes ) {

				if ( node[ i ] ) {

					script[ i ] = node[ i ];

				}

			}

		}

		doc.head.appendChild( script ).parentNode.removeChild( script );

	}





function toType( obj ) {

	if ( obj == null ) {

		return obj + "";

	}



	// Support: Android <=2.3 only (functionish RegExp)

	return typeof obj === "object" || typeof obj === "function" ?

		class2type[ toString.call( obj ) ] || "object" :

		typeof obj;

}

/* global Symbol */

// Defining this global in .eslintrc.json would create a danger of using the global

// unguarded in another place, it seems safer to define global only for this module







var

	version = "3.3.1",



	// Define a local copy of jQuery

	jQuery = function( selector, context ) {



		// The jQuery object is actually just the init constructor 'enhanced'

		// Need init if jQuery is called (just allow error to be thrown if not included)

		return new jQuery.fn.init( selector, context );

	},



	// Support: Android <=4.0 only

	// Make sure we trim BOM and NBSP

	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;



jQuery.fn = jQuery.prototype = {



	// The current version of jQuery being used

	jquery: version,



	constructor: jQuery,



	// The default length of a jQuery object is 0

	length: 0,



	toArray: function() {

		return slice.call( this );

	},



	// Get the Nth element in the matched element set OR

	// Get the whole matched element set as a clean array

	get: function( num ) {



		// Return all the elements in a clean array

		if ( num == null ) {

			return slice.call( this );

		}



		// Return just the one element from the set

		return num < 0 ? this[ num + this.length ] : this[ num ];

	},



	// Take an array of elements and push it onto the stack

	// (returning the new matched element set)

	pushStack: function( elems ) {



		// Build a new jQuery matched element set

		var ret = jQuery.merge( this.constructor(), elems );



		// Add the old object onto the stack (as a reference)

		ret.prevObject = this;



		// Return the newly-formed element set

		return ret;

	},



	// Execute a callback for every element in the matched set.

	each: function( callback ) {

		return jQuery.each( this, callback );

	},



	map: function( callback ) {

		return this.pushStack( jQuery.map( this, function( elem, i ) {

			return callback.call( elem, i, elem );

		} ) );

	},



	slice: function() {

		return this.pushStack( slice.apply( this, arguments ) );

	},



	first: function() {

		return this.eq( 0 );

	},



	last: function() {

		return this.eq( -1 );

	},



	eq: function( i ) {

		var len = this.length,

			j = +i + ( i < 0 ? len : 0 );

		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );

	},



	end: function() {

		return this.prevObject || this.constructor();

	},



	// For internal use only.

	// Behaves like an Array's method, not like a jQuery method.

	push: push,

	sort: arr.sort,

	splice: arr.splice

};



jQuery.extend = jQuery.fn.extend = function() {

	var options, name, src, copy, copyIsArray, clone,

		target = arguments[ 0 ] || {},

		i = 1,

		length = arguments.length,

		deep = false;



	// Handle a deep copy situation

	if ( typeof target === "boolean" ) {

		deep = target;



		// Skip the boolean and the target

		target = arguments[ i ] || {};

		i++;

	}



	// Handle case when target is a string or something (possible in deep copy)

	if ( typeof target !== "object" && !isFunction( target ) ) {

		target = {};

	}



	// Extend jQuery itself if only one argument is passed

	if ( i === length ) {

		target = this;

		i--;

	}



	for ( ; i < length; i++ ) {



		// Only deal with non-null/undefined values

		if ( ( options = arguments[ i ] ) != null ) {



			// Extend the base object

			for ( name in options ) {

				src = target[ name ];

				copy = options[ name ];



				// Prevent never-ending loop

				if ( target === copy ) {

					continue;

				}



				// Recurse if we're merging plain objects or arrays

				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||

					( copyIsArray = Array.isArray( copy ) ) ) ) {



					if ( copyIsArray ) {

						copyIsArray = false;

						clone = src && Array.isArray( src ) ? src : [];



					} else {

						clone = src && jQuery.isPlainObject( src ) ? src : {};

					}



					// Never move original objects, clone them

					target[ name ] = jQuery.extend( deep, clone, copy );



				// Don't bring in undefined values

				} else if ( copy !== undefined ) {

					target[ name ] = copy;

				}

			}

		}

	}



	// Return the modified object

	return target;

};



jQuery.extend( {



	// Unique for each copy of jQuery on the page

	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),



	// Assume jQuery is ready without the ready module

	isReady: true,



	error: function( msg ) {

		throw new Error( msg );

	},



	noop: function() {},



	isPlainObject: function( obj ) {

		var proto, Ctor;



		// Detect obvious negatives

		// Use toString instead of jQuery.type to catch host objects

		if ( !obj || toString.call( obj ) !== "[object Object]" ) {

			return false;

		}



		proto = getProto( obj );



		// Objects with no prototype (e.g., `Object.create( null )`) are plain

		if ( !proto ) {

			return true;

		}



		// Objects with prototype are plain iff they were constructed by a global Object function

		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;

		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;

	},



	isEmptyObject: function( obj ) {



		/* eslint-disable no-unused-vars */

		// See https://github.com/eslint/eslint/issues/6125

		var name;



		for ( name in obj ) {

			return false;

		}

		return true;

	},



	// Evaluates a script in a global context

	globalEval: function( code ) {

		DOMEval( code );

	},



	each: function( obj, callback ) {

		var length, i = 0;



		if ( isArrayLike( obj ) ) {

			length = obj.length;

			for ( ; i < length; i++ ) {

				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {

					break;

				}

			}

		} else {

			for ( i in obj ) {

				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {

					break;

				}

			}

		}



		return obj;

	},



	// Support: Android <=4.0 only

	trim: function( text ) {

		return text == null ?

			"" :

			( text + "" ).replace( rtrim, "" );

	},



	// results is for internal usage only

	makeArray: function( arr, results ) {

		var ret = results || [];



		if ( arr != null ) {

			if ( isArrayLike( Object( arr ) ) ) {

				jQuery.merge( ret,

					typeof arr === "string" ?

					[ arr ] : arr

				);

			} else {

				push.call( ret, arr );

			}

		}



		return ret;

	},



	inArray: function( elem, arr, i ) {

		return arr == null ? -1 : indexOf.call( arr, elem, i );

	},



	// Support: Android <=4.0 only, PhantomJS 1 only

	// push.apply(_, arraylike) throws on ancient WebKit

	merge: function( first, second ) {

		var len = +second.length,

			j = 0,

			i = first.length;



		for ( ; j < len; j++ ) {

			first[ i++ ] = second[ j ];

		}



		first.length = i;



		return first;

	},



	grep: function( elems, callback, invert ) {

		var callbackInverse,

			matches = [],

			i = 0,

			length = elems.length,

			callbackExpect = !invert;



		// Go through the array, only saving the items

		// that pass the validator function

		for ( ; i < length; i++ ) {

			callbackInverse = !callback( elems[ i ], i );

			if ( callbackInverse !== callbackExpect ) {

				matches.push( elems[ i ] );

			}

		}



		return matches;

	},



	// arg is for internal usage only

	map: function( elems, callback, arg ) {

		var length, value,

			i = 0,

			ret = [];



		// Go through the array, translating each of the items to their new values

		if ( isArrayLike( elems ) ) {

			length = elems.length;

			for ( ; i < length; i++ ) {

				value = callback( elems[ i ], i, arg );



				if ( value != null ) {

					ret.push( value );

				}

			}



		// Go through every key on the object,

		} else {

			for ( i in elems ) {

				value = callback( elems[ i ], i, arg );



				if ( value != null ) {

					ret.push( value );

				}

			}

		}



		// Flatten any nested arrays

		return concat.apply( [], ret );

	},



	// A global GUID counter for objects

	guid: 1,



	// jQuery.support is not used in Core but other projects attach their

	// properties to it so it needs to exist.

	support: support

} );



if ( typeof Symbol === "function" ) {

	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];

}



// Populate the class2type map

jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),

function( i, name ) {

	class2type[ "[object " + name + "]" ] = name.toLowerCase();

} );



function isArrayLike( obj ) {



	// Support: real iOS 8.2 only (not reproducible in simulator)

	// `in` check used to prevent JIT error (gh-2145)

	// hasOwn isn't used here due to false negatives

	// regarding Nodelist length in IE

	var length = !!obj && "length" in obj && obj.length,

		type = toType( obj );



	if ( isFunction( obj ) || isWindow( obj ) ) {

		return false;

	}



	return type === "array" || length === 0 ||

		typeof length === "number" && length > 0 && ( length - 1 ) in obj;

}

var Sizzle =

/*!

 * Sizzle CSS Selector Engine v2.3.3

 * https://sizzlejs.com/

 *

 * Copyright jQuery Foundation and other contributors

 * Released under the MIT license

 * http://jquery.org/license

 *

 * Date: 2016-08-08

 */

(function( window ) {



var i,

	support,

	Expr,

	getText,

	isXML,

	tokenize,

	compile,

	select,

	outermostContext,

	sortInput,

	hasDuplicate,



	// Local document vars

	setDocument,

	document,

	docElem,

	documentIsHTML,

	rbuggyQSA,

	rbuggyMatches,

	matches,

	contains,



	// Instance-specific data

	expando = "sizzle" + 1 * new Date(),

	preferredDoc = window.document,

	dirruns = 0,

	done = 0,

	classCache = createCache(),

	tokenCache = createCache(),

	compilerCache = createCache(),

	sortOrder = function( a, b ) {

		if ( a === b ) {

			hasDuplicate = true;

		}

		return 0;

	},



	// Instance methods

	hasOwn = ({}).hasOwnProperty,

	arr = [],

	pop = arr.pop,

	push_native = arr.push,

	push = arr.push,

	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native

	// https://jsperf.com/thor-indexof-vs-for/5

	indexOf = function( list, elem ) {

		var i = 0,

			len = list.length;

		for ( ; i < len; i++ ) {

			if ( list[i] === elem ) {

				return i;

			}

		}

		return -1;

	},



	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",



	// Regular expressions



	// http://www.w3.org/TR/css3-selectors/#whitespace

	whitespace = "[\\x20\\t\\r\\n\\f]",



	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier

	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",



	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors

	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)

		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"

		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +

		"*\\]",



	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:

		// 1. quoted (capture 3; capture 4 or capture 5)

		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)

		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)

		".*" +

		")\\)|)",



	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter

	rwhitespace = new RegExp( whitespace + "+", "g" ),

	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),



	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),

	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),



	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),



	rpseudo = new RegExp( pseudos ),

	ridentifier = new RegExp( "^" + identifier + "$" ),



	matchExpr = {

		"ID": new RegExp( "^#(" + identifier + ")" ),

		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),

		"TAG": new RegExp( "^(" + identifier + "|[*])" ),

		"ATTR": new RegExp( "^" + attributes ),

		"PSEUDO": new RegExp( "^" + pseudos ),

		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +

			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +

			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),

		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()

		// We use this for POS matching in `select`

		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +

			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )

	},



	rinputs = /^(?:input|select|textarea|button)$/i,

	rheader = /^h\d$/i,



	rnative = /^[^{]+\{\s*\[native \w/,



	// Easily-parseable/retrievable ID or TAG or CLASS selectors

	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,



	rsibling = /[+~]/,



	// CSS escapes

	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters

	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),

	funescape = function( _, escaped, escapedWhitespace ) {

		var high = "0x" + escaped - 0x10000;

		// NaN means non-codepoint

		// Support: Firefox<24

		// Workaround erroneous numeric interpretation of +"0x"

		return high !== high || escapedWhitespace ?

			escaped :

			high < 0 ?

				// BMP codepoint

				String.fromCharCode( high + 0x10000 ) :

				// Supplemental Plane codepoint (surrogate pair)

				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );

	},



	// CSS string/identifier serialization

	// https://drafts.csswg.org/cssom/#common-serializing-idioms

	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,

	fcssescape = function( ch, asCodePoint ) {

		if ( asCodePoint ) {



			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER

			if ( ch === "\0" ) {

				return "\uFFFD";

			}



			// Control characters and (dependent upon position) numbers get escaped as code points

			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";

		}



		// Other potentially-special ASCII characters get backslash-escaped

		return "\\" + ch;

	},



	// Used for iframes

	// See setDocument()

	// Removing the function wrapper causes a "Permission Denied"

	// error in IE

	unloadHandler = function() {

		setDocument();

	},



	disabledAncestor = addCombinator(

		function( elem ) {

			return elem.disabled === true && ("form" in elem || "label" in elem);

		},

		{ dir: "parentNode", next: "legend" }

	);



// Optimize for push.apply( _, NodeList )

try {

	push.apply(

		(arr = slice.call( preferredDoc.childNodes )),

		preferredDoc.childNodes

	);

	// Support: Android<4.0

	// Detect silently failing push.apply

	arr[ preferredDoc.childNodes.length ].nodeType;

} catch ( e ) {

	push = { apply: arr.length ?



		// Leverage slice if possible

		function( target, els ) {

			push_native.apply( target, slice.call(els) );

		} :



		// Support: IE<9

		// Otherwise append directly

		function( target, els ) {

			var j = target.length,

				i = 0;

			// Can't trust NodeList.length

			while ( (target[j++] = els[i++]) ) {}

			target.length = j - 1;

		}

	};

}



function Sizzle( selector, context, results, seed ) {

	var m, i, elem, nid, match, groups, newSelector,

		newContext = context && context.ownerDocument,



		// nodeType defaults to 9, since context defaults to document

		nodeType = context ? context.nodeType : 9;



	results = results || [];



	// Return early from calls with invalid selector or context

	if ( typeof selector !== "string" || !selector ||

		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {



		return results;

	}



	// Try to shortcut find operations (as opposed to filters) in HTML documents

	if ( !seed ) {



		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {

			setDocument( context );

		}

		context = context || document;



		if ( documentIsHTML ) {



			// If the selector is sufficiently simple, try using a "get*By*" DOM method

			// (excepting DocumentFragment context, where the methods don't exist)

			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {



				// ID selector

				if ( (m = match[1]) ) {



					// Document context

					if ( nodeType === 9 ) {

						if ( (elem = context.getElementById( m )) ) {



							// Support: IE, Opera, Webkit

							// TODO: identify versions

							// getElementById can match elements by name instead of ID

							if ( elem.id === m ) {

								results.push( elem );

								return results;

							}

						} else {

							return results;

						}



					// Element context

					} else {



						// Support: IE, Opera, Webkit

						// TODO: identify versions

						// getElementById can match elements by name instead of ID

						if ( newContext && (elem = newContext.getElementById( m )) &&

							contains( context, elem ) &&

							elem.id === m ) {



							results.push( elem );

							return results;

						}

					}



				// Type selector

				} else if ( match[2] ) {

					push.apply( results, context.getElementsByTagName( selector ) );

					return results;



				// Class selector

				} else if ( (m = match[3]) && support.getElementsByClassName &&

					context.getElementsByClassName ) {



					push.apply( results, context.getElementsByClassName( m ) );

					return results;

				}

			}



			// Take advantage of querySelectorAll

			if ( support.qsa &&

				!compilerCache[ selector + " " ] &&

				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {



				if ( nodeType !== 1 ) {

					newContext = context;

					newSelector = selector;



				// qSA looks outside Element context, which is not what we want

				// Thanks to Andrew Dupont for this workaround technique

				// Support: IE <=8

				// Exclude object elements

				} else if ( context.nodeName.toLowerCase() !== "object" ) {



					// Capture the context ID, setting it first if necessary

					if ( (nid = context.getAttribute( "id" )) ) {

						nid = nid.replace( rcssescape, fcssescape );

					} else {

						context.setAttribute( "id", (nid = expando) );

					}



					// Prefix every selector in the list

					groups = tokenize( selector );

					i = groups.length;

					while ( i-- ) {

						groups[i] = "#" + nid + " " + toSelector( groups[i] );

					}

					newSelector = groups.join( "," );



					// Expand context for sibling selectors

					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||

						context;

				}



				if ( newSelector ) {

					try {

						push.apply( results,

							newContext.querySelectorAll( newSelector )

						);

						return results;

					} catch ( qsaError ) {

					} finally {

						if ( nid === expando ) {

							context.removeAttribute( "id" );

						}

					}

				}

			}

		}

	}



	// All others

	return select( selector.replace( rtrim, "$1" ), context, results, seed );

}



/**

 * Create key-value caches of limited size

 * @returns {function(string, object)} Returns the Object data after storing it on itself with

 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)

 *	deleting the oldest entry

 */

function createCache() {

	var keys = [];



	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)

		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries

			delete cache[ keys.shift() ];

		}

		return (cache[ key + " " ] = value);

	}

	return cache;

}



/**

 * Mark a function for special use by Sizzle

 * @param {Function} fn The function to mark

 */

function markFunction( fn ) {

	fn[ expando ] = true;

	return fn;

}



/**

 * Support testing using an element

 * @param {Function} fn Passed the created element and returns a boolean result

 */

function assert( fn ) {

	var el = document.createElement("fieldset");



	try {

		return !!fn( el );

	} catch (e) {

		return false;

	} finally {

		// Remove from its parent by default

		if ( el.parentNode ) {

			el.parentNode.removeChild( el );

		}

		// release memory in IE

		el = null;

	}

}



/**

 * Adds the same handler for all of the specified attrs

 * @param {String} attrs Pipe-separated list of attributes

 * @param {Function} handler The method that will be applied

 */

function addHandle( attrs, handler ) {

	var arr = attrs.split("|"),

		i = arr.length;



	while ( i-- ) {

		Expr.attrHandle[ arr[i] ] = handler;

	}

}



/**

 * Checks document order of two siblings

 * @param {Element} a

 * @param {Element} b

 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b

 */

function siblingCheck( a, b ) {

	var cur = b && a,

		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&

			a.sourceIndex - b.sourceIndex;



	// Use IE sourceIndex if available on both nodes

	if ( diff ) {

		return diff;

	}



	// Check if b follows a

	if ( cur ) {

		while ( (cur = cur.nextSibling) ) {

			if ( cur === b ) {

				return -1;

			}

		}

	}



	return a ? 1 : -1;

}



/**

 * Returns a function to use in pseudos for input types

 * @param {String} type

 */

function createInputPseudo( type ) {

	return function( elem ) {

		var name = elem.nodeName.toLowerCase();

		return name === "input" && elem.type === type;

	};

}



/**

 * Returns a function to use in pseudos for buttons

 * @param {String} type

 */

function createButtonPseudo( type ) {

	return function( elem ) {

		var name = elem.nodeName.toLowerCase();

		return (name === "input" || name === "button") && elem.type === type;

	};

}



/**

 * Returns a function to use in pseudos for :enabled/:disabled

 * @param {Boolean} disabled true for :disabled; false for :enabled

 */

function createDisabledPseudo( disabled ) {



	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable

	return function( elem ) {



		// Only certain elements can match :enabled or :disabled

		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled

		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled

		if ( "form" in elem ) {



			// Check for inherited disabledness on relevant non-disabled elements:

			// * listed form-associated elements in a disabled fieldset

			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed

			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled

			// * option elements in a disabled optgroup

			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled

			// All such elements have a "form" property.

			if ( elem.parentNode && elem.disabled === false ) {



				// Option elements defer to a parent optgroup if present

				if ( "label" in elem ) {

					if ( "label" in elem.parentNode ) {

						return elem.parentNode.disabled === disabled;

					} else {

						return elem.disabled === disabled;

					}

				}



				// Support: IE 6 - 11

				// Use the isDisabled shortcut property to check for disabled fieldset ancestors

				return elem.isDisabled === disabled ||



					// Where there is no isDisabled, check manually

					/* jshint -W018 */

					elem.isDisabled !== !disabled &&

						disabledAncestor( elem ) === disabled;

			}



			return elem.disabled === disabled;



		// Try to winnow out elements that can't be disabled before trusting the disabled property.

		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't

		// even exist on them, let alone have a boolean value.

		} else if ( "label" in elem ) {

			return elem.disabled === disabled;

		}



		// Remaining elements are neither :enabled nor :disabled

		return false;

	};

}



/**

 * Returns a function to use in pseudos for positionals

 * @param {Function} fn

 */

function createPositionalPseudo( fn ) {

	return markFunction(function( argument ) {

		argument = +argument;

		return markFunction(function( seed, matches ) {

			var j,

				matchIndexes = fn( [], seed.length, argument ),

				i = matchIndexes.length;



			// Match elements found at the specified indexes

			while ( i-- ) {

				if ( seed[ (j = matchIndexes[i]) ] ) {

					seed[j] = !(matches[j] = seed[j]);

				}

			}

		});

	});

}



/**

 * Checks a node for validity as a Sizzle context

 * @param {Element|Object=} context

 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value

 */

function testContext( context ) {

	return context && typeof context.getElementsByTagName !== "undefined" && context;

}



// Expose support vars for convenience

support = Sizzle.support = {};



/**

 * Detects XML nodes

 * @param {Element|Object} elem An element or a document

 * @returns {Boolean} True iff elem is a non-HTML XML node

 */

isXML = Sizzle.isXML = function( elem ) {

	// documentElement is verified for cases where it doesn't yet exist

	// (such as loading iframes in IE - #4833)

	var documentElement = elem && (elem.ownerDocument || elem).documentElement;

	return documentElement ? documentElement.nodeName !== "HTML" : false;

};



/**

 * Sets document-related variables once based on the current document

 * @param {Element|Object} [doc] An element or document object to use to set the document

 * @returns {Object} Returns the current document

 */

setDocument = Sizzle.setDocument = function( node ) {

	var hasCompare, subWindow,

		doc = node ? node.ownerDocument || node : preferredDoc;



	// Return early if doc is invalid or already selected

	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {

		return document;

	}



	// Update global variables

	document = doc;

	docElem = document.documentElement;

	documentIsHTML = !isXML( document );



	// Support: IE 9-11, Edge

	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)

	if ( preferredDoc !== document &&

		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {



		// Support: IE 11, Edge

		if ( subWindow.addEventListener ) {

			subWindow.addEventListener( "unload", unloadHandler, false );



		// Support: IE 9 - 10 only

		} else if ( subWindow.attachEvent ) {

			subWindow.attachEvent( "onunload", unloadHandler );

		}

	}



	/* Attributes

	---------------------------------------------------------------------- */



	// Support: IE<8

	// Verify that getAttribute really returns attributes and not properties

	// (excepting IE8 booleans)

	support.attributes = assert(function( el ) {

		el.className = "i";

		return !el.getAttribute("className");

	});



	/* getElement(s)By*

	---------------------------------------------------------------------- */



	// Check if getElementsByTagName("*") returns only elements

	support.getElementsByTagName = assert(function( el ) {

		el.appendChild( document.createComment("") );

		return !el.getElementsByTagName("*").length;

	});



	// Support: IE<9

	support.getElementsByClassName = rnative.test( document.getElementsByClassName );



	// Support: IE<10

	// Check if getElementById returns elements by name

	// The broken getElementById methods don't pick up programmatically-set names,

	// so use a roundabout getElementsByName test

	support.getById = assert(function( el ) {

		docElem.appendChild( el ).id = expando;

		return !document.getElementsByName || !document.getElementsByName( expando ).length;

	});



	// ID filter and find

	if ( support.getById ) {

		Expr.filter["ID"] = function( id ) {

			var attrId = id.replace( runescape, funescape );

			return function( elem ) {

				return elem.getAttribute("id") === attrId;

			};

		};

		Expr.find["ID"] = function( id, context ) {

			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {

				var elem = context.getElementById( id );

				return elem ? [ elem ] : [];

			}

		};

	} else {

		Expr.filter["ID"] =  function( id ) {

			var attrId = id.replace( runescape, funescape );

			return function( elem ) {

				var node = typeof elem.getAttributeNode !== "undefined" &&

					elem.getAttributeNode("id");

				return node && node.value === attrId;

			};

		};



		// Support: IE 6 - 7 only

		// getElementById is not reliable as a find shortcut

		Expr.find["ID"] = function( id, context ) {

			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {

				var node, i, elems,

					elem = context.getElementById( id );



				if ( elem ) {



					// Verify the id attribute

					node = elem.getAttributeNode("id");

					if ( node && node.value === id ) {

						return [ elem ];

					}



					// Fall back on getElementsByName

					elems = context.getElementsByName( id );

					i = 0;

					while ( (elem = elems[i++]) ) {

						node = elem.getAttributeNode("id");

						if ( node && node.value === id ) {

							return [ elem ];

						}

					}

				}



				return [];

			}

		};

	}



	// Tag

	Expr.find["TAG"] = support.getElementsByTagName ?

		function( tag, context ) {

			if ( typeof context.getElementsByTagName !== "undefined" ) {

				return context.getElementsByTagName( tag );



			// DocumentFragment nodes don't have gEBTN

			} else if ( support.qsa ) {

				return context.querySelectorAll( tag );

			}

		} :



		function( tag, context ) {

			var elem,

				tmp = [],

				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too

				results = context.getElementsByTagName( tag );



			// Filter out possible comments

			if ( tag === "*" ) {

				while ( (elem = results[i++]) ) {

					if ( elem.nodeType === 1 ) {

						tmp.push( elem );

					}

				}



				return tmp;

			}

			return results;

		};



	// Class

	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {

		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {

			return context.getElementsByClassName( className );

		}

	};



	/* QSA/matchesSelector

	---------------------------------------------------------------------- */



	// QSA and matchesSelector support



	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)

	rbuggyMatches = [];



	// qSa(:focus) reports false when true (Chrome 21)

	// We allow this because of a bug in IE8/9 that throws an error

	// whenever `document.activeElement` is accessed on an iframe

	// So, we allow :focus to pass through QSA all the time to avoid the IE error

	// See https://bugs.jquery.com/ticket/13378

	rbuggyQSA = [];



	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {

		// Build QSA regex

		// Regex strategy adopted from Diego Perini

		assert(function( el ) {

			// Select is set to empty string on purpose

			// This is to test IE's treatment of not explicitly

			// setting a boolean content attribute,

			// since its presence should be enough

			// https://bugs.jquery.com/ticket/12359

			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +

				"<select id='" + expando + "-\r\\' msallowcapture=''>" +

				"<option selected=''></option></select>";



			// Support: IE8, Opera 11-12.16

			// Nothing should be selected when empty strings follow ^= or $= or *=

			// The test attribute must be unknown in Opera but "safe" for WinRT

			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

			if ( el.querySelectorAll("[msallowcapture^='']").length ) {

				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );

			}



			// Support: IE8

			// Boolean attributes and "value" are not treated correctly

			if ( !el.querySelectorAll("[selected]").length ) {

				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );

			}



			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+

			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {

				rbuggyQSA.push("~=");

			}



			// Webkit/Opera - :checked should return selected option elements

			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked

			// IE8 throws error here and will not see later tests

			if ( !el.querySelectorAll(":checked").length ) {

				rbuggyQSA.push(":checked");

			}



			// Support: Safari 8+, iOS 8+

			// https://bugs.webkit.org/show_bug.cgi?id=136851

			// In-page `selector#id sibling-combinator selector` fails

			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {

				rbuggyQSA.push(".#.+[+~]");

			}

		});



		assert(function( el ) {

			el.innerHTML = "<a href='' disabled='disabled'></a>" +

				"<select disabled='disabled'><option/></select>";



			// Support: Windows 8 Native Apps

			// The type and name attributes are restricted during .innerHTML assignment

			var input = document.createElement("input");

			input.setAttribute( "type", "hidden" );

			el.appendChild( input ).setAttribute( "name", "D" );



			// Support: IE8

			// Enforce case-sensitivity of name attribute

			if ( el.querySelectorAll("[name=d]").length ) {

				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );

			}



			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)

			// IE8 throws error here and will not see later tests

			if ( el.querySelectorAll(":enabled").length !== 2 ) {

				rbuggyQSA.push( ":enabled", ":disabled" );

			}



			// Support: IE9-11+

			// IE's :disabled selector does not pick up the children of disabled fieldsets

			docElem.appendChild( el ).disabled = true;

			if ( el.querySelectorAll(":disabled").length !== 2 ) {

				rbuggyQSA.push( ":enabled", ":disabled" );

			}



			// Opera 10-11 does not throw on post-comma invalid pseudos

			el.querySelectorAll("*,:x");

			rbuggyQSA.push(",.*:");

		});

	}



	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||

		docElem.webkitMatchesSelector ||

		docElem.mozMatchesSelector ||

		docElem.oMatchesSelector ||

		docElem.msMatchesSelector) )) ) {



		assert(function( el ) {

			// Check to see if it's possible to do matchesSelector

			// on a disconnected node (IE 9)

			support.disconnectedMatch = matches.call( el, "*" );



			// This should fail with an exception

			// Gecko does not error, returns false instead

			matches.call( el, "[s!='']:x" );

			rbuggyMatches.push( "!=", pseudos );

		});

	}



	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );

	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );



	/* Contains

	---------------------------------------------------------------------- */

	hasCompare = rnative.test( docElem.compareDocumentPosition );



	// Element contains another

	// Purposefully self-exclusive

	// As in, an element does not contain itself

	contains = hasCompare || rnative.test( docElem.contains ) ?

		function( a, b ) {

			var adown = a.nodeType === 9 ? a.documentElement : a,

				bup = b && b.parentNode;

			return a === bup || !!( bup && bup.nodeType === 1 && (

				adown.contains ?

					adown.contains( bup ) :

					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16

			));

		} :

		function( a, b ) {

			if ( b ) {

				while ( (b = b.parentNode) ) {

					if ( b === a ) {

						return true;

					}

				}

			}

			return false;

		};



	/* Sorting

	---------------------------------------------------------------------- */



	// Document order sorting

	sortOrder = hasCompare ?

	function( a, b ) {



		// Flag for duplicate removal

		if ( a === b ) {

			hasDuplicate = true;

			return 0;

		}



		// Sort on method existence if only one input has compareDocumentPosition

		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

		if ( compare ) {

			return compare;

		}



		// Calculate position if both inputs belong to the same document

		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?

			a.compareDocumentPosition( b ) :



			// Otherwise we know they are disconnected

			1;



		// Disconnected nodes

		if ( compare & 1 ||

			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {



			// Choose the first element that is related to our preferred document

			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {

				return -1;

			}

			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {

				return 1;

			}



			// Maintain original order

			return sortInput ?

				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :

				0;

		}



		return compare & 4 ? -1 : 1;

	} :

	function( a, b ) {

		// Exit early if the nodes are identical

		if ( a === b ) {

			hasDuplicate = true;

			return 0;

		}



		var cur,

			i = 0,

			aup = a.parentNode,

			bup = b.parentNode,

			ap = [ a ],

			bp = [ b ];



		// Parentless nodes are either documents or disconnected

		if ( !aup || !bup ) {

			return a === document ? -1 :

				b === document ? 1 :

				aup ? -1 :

				bup ? 1 :

				sortInput ?

				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :

				0;



		// If the nodes are siblings, we can do a quick check

		} else if ( aup === bup ) {

			return siblingCheck( a, b );

		}



		// Otherwise we need full lists of their ancestors for comparison

		cur = a;

		while ( (cur = cur.parentNode) ) {

			ap.unshift( cur );

		}

		cur = b;

		while ( (cur = cur.parentNode) ) {

			bp.unshift( cur );

		}



		// Walk down the tree looking for a discrepancy

		while ( ap[i] === bp[i] ) {

			i++;

		}



		return i ?

			// Do a sibling check if the nodes have a common ancestor

			siblingCheck( ap[i], bp[i] ) :



			// Otherwise nodes in our document sort first

			ap[i] === preferredDoc ? -1 :

			bp[i] === preferredDoc ? 1 :

			0;

	};



	return document;

};



Sizzle.matches = function( expr, elements ) {

	return Sizzle( expr, null, null, elements );

};



Sizzle.matchesSelector = function( elem, expr ) {

	// Set document vars if needed

	if ( ( elem.ownerDocument || elem ) !== document ) {

		setDocument( elem );

	}



	// Make sure that attribute selectors are quoted

	expr = expr.replace( rattributeQuotes, "='$1']" );



	if ( support.matchesSelector && documentIsHTML &&

		!compilerCache[ expr + " " ] &&

		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&

		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {



		try {

			var ret = matches.call( elem, expr );



			// IE 9's matchesSelector returns false on disconnected nodes

			if ( ret || support.disconnectedMatch ||

					// As well, disconnected nodes are said to be in a document

					// fragment in IE 9

					elem.document && elem.document.nodeType !== 11 ) {

				return ret;

			}

		} catch (e) {}

	}



	return Sizzle( expr, document, null, [ elem ] ).length > 0;

};



Sizzle.contains = function( context, elem ) {

	// Set document vars if needed

	if ( ( context.ownerDocument || context ) !== document ) {

		setDocument( context );

	}

	return contains( context, elem );

};



Sizzle.attr = function( elem, name ) {

	// Set document vars if needed

	if ( ( elem.ownerDocument || elem ) !== document ) {

		setDocument( elem );

	}



	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)

		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?

			fn( elem, name, !documentIsHTML ) :

			undefined;



	return val !== undefined ?

		val :

		support.attributes || !documentIsHTML ?

			elem.getAttribute( name ) :

			(val = elem.getAttributeNode(name)) && val.specified ?

				val.value :

				null;

};



Sizzle.escape = function( sel ) {

	return (sel + "").replace( rcssescape, fcssescape );

};



Sizzle.error = function( msg ) {

	throw new Error( "Syntax error, unrecognized expression: " + msg );

};



/**

 * Document sorting and removing duplicates

 * @param {ArrayLike} results

 */

Sizzle.uniqueSort = function( results ) {

	var elem,

		duplicates = [],

		j = 0,

		i = 0;



	// Unless we *know* we can detect duplicates, assume their presence

	hasDuplicate = !support.detectDuplicates;

	sortInput = !support.sortStable && results.slice( 0 );

	results.sort( sortOrder );



	if ( hasDuplicate ) {

		while ( (elem = results[i++]) ) {

			if ( elem === results[ i ] ) {

				j = duplicates.push( i );

			}

		}

		while ( j-- ) {

			results.splice( duplicates[ j ], 1 );

		}

	}



	// Clear input after sorting to release objects

	// See https://github.com/jquery/sizzle/pull/225

	sortInput = null;



	return results;

};



/**

 * Utility function for retrieving the text value of an array of DOM nodes

 * @param {Array|Element} elem

 */

getText = Sizzle.getText = function( elem ) {

	var node,

		ret = "",

		i = 0,

		nodeType = elem.nodeType;



	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array

		while ( (node = elem[i++]) ) {

			// Do not traverse comment nodes

			ret += getText( node );

		}

	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements

		// innerText usage removed for consistency of new lines (jQuery #11153)

		if ( typeof elem.textContent === "string" ) {

			return elem.textContent;

		} else {

			// Traverse its children

			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {

				ret += getText( elem );

			}

		}

	} else if ( nodeType === 3 || nodeType === 4 ) {

		return elem.nodeValue;

	}

	// Do not include comment or processing instruction nodes



	return ret;

};



Expr = Sizzle.selectors = {



	// Can be adjusted by the user

	cacheLength: 50,



	createPseudo: markFunction,



	match: matchExpr,



	attrHandle: {},



	find: {},



	relative: {

		">": { dir: "parentNode", first: true },

		" ": { dir: "parentNode" },

		"+": { dir: "previousSibling", first: true },

		"~": { dir: "previousSibling" }

	},



	preFilter: {

		"ATTR": function( match ) {

			match[1] = match[1].replace( runescape, funescape );



			// Move the given value to match[3] whether quoted or unquoted

			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );



			if ( match[2] === "~=" ) {

				match[3] = " " + match[3] + " ";

			}



			return match.slice( 0, 4 );

		},



		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]

				1 type (only|nth|...)

				2 what (child|of-type)

				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)

				4 xn-component of xn+y argument ([+-]?\d*n|)

				5 sign of xn-component

				6 x of xn-component

				7 sign of y-component

				8 y of y-component

			*/

			match[1] = match[1].toLowerCase();



			if ( match[1].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument

				if ( !match[3] ) {

					Sizzle.error( match[0] );

				}



				// numeric x and y parameters for Expr.filter.CHILD

				// remember that false/true cast respectively to 0/1

				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );

				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );



			// other types prohibit arguments

			} else if ( match[3] ) {

				Sizzle.error( match[0] );

			}



			return match;

		},



		"PSEUDO": function( match ) {

			var excess,

				unquoted = !match[6] && match[2];



			if ( matchExpr["CHILD"].test( match[0] ) ) {

				return null;

			}



			// Accept quoted arguments as-is

			if ( match[3] ) {

				match[2] = match[4] || match[5] || "";



			// Strip excess characters from unquoted arguments

			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)

				(excess = tokenize( unquoted, true )) &&

				// advance to the next closing parenthesis

				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {



				// excess is a negative index

				match[0] = match[0].slice( 0, excess );

				match[2] = unquoted.slice( 0, excess );

			}



			// Return only captures needed by the pseudo filter method (type and argument)

			return match.slice( 0, 3 );

		}

	},



	filter: {



		"TAG": function( nodeNameSelector ) {

			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();

			return nodeNameSelector === "*" ?

				function() { return true; } :

				function( elem ) {

					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;

				};

		},



		"CLASS": function( className ) {

			var pattern = classCache[ className + " " ];



			return pattern ||

				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&

				classCache( className, function( elem ) {

					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );

				});

		},



		"ATTR": function( name, operator, check ) {

			return function( elem ) {

				var result = Sizzle.attr( elem, name );



				if ( result == null ) {

					return operator === "!=";

				}

				if ( !operator ) {

					return true;

				}



				result += "";



				return operator === "=" ? result === check :

					operator === "!=" ? result !== check :

					operator === "^=" ? check && result.indexOf( check ) === 0 :

					operator === "*=" ? check && result.indexOf( check ) > -1 :

					operator === "$=" ? check && result.slice( -check.length ) === check :

					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :

					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :

					false;

			};

		},



		"CHILD": function( type, what, argument, first, last ) {

			var simple = type.slice( 0, 3 ) !== "nth",

				forward = type.slice( -4 ) !== "last",

				ofType = what === "of-type";



			return first === 1 && last === 0 ?



				// Shortcut for :nth-*(n)

				function( elem ) {

					return !!elem.parentNode;

				} :



				function( elem, context, xml ) {

					var cache, uniqueCache, outerCache, node, nodeIndex, start,

						dir = simple !== forward ? "nextSibling" : "previousSibling",

						parent = elem.parentNode,

						name = ofType && elem.nodeName.toLowerCase(),

						useCache = !xml && !ofType,

						diff = false;



					if ( parent ) {



						// :(first|last|only)-(child|of-type)

						if ( simple ) {

							while ( dir ) {

								node = elem;

								while ( (node = node[ dir ]) ) {

									if ( ofType ?

										node.nodeName.toLowerCase() === name :

										node.nodeType === 1 ) {



										return false;

									}

								}

								// Reverse direction for :only-* (if we haven't yet done so)

								start = dir = type === "only" && !start && "nextSibling";

							}

							return true;

						}



						start = [ forward ? parent.firstChild : parent.lastChild ];



						// non-xml :nth-child(...) stores cache data on `parent`

						if ( forward && useCache ) {



							// Seek `elem` from a previously-cached index



							// ...in a gzip-friendly way

							node = parent;

							outerCache = node[ expando ] || (node[ expando ] = {});



							// Support: IE <9 only

							// Defend against cloned attroperties (jQuery gh-1709)

							uniqueCache = outerCache[ node.uniqueID ] ||

								(outerCache[ node.uniqueID ] = {});



							cache = uniqueCache[ type ] || [];

							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];

							diff = nodeIndex && cache[ 2 ];

							node = nodeIndex && parent.childNodes[ nodeIndex ];



							while ( (node = ++nodeIndex && node && node[ dir ] ||



								// Fallback to seeking `elem` from the start

								(diff = nodeIndex = 0) || start.pop()) ) {



								// When found, cache indexes on `parent` and break

								if ( node.nodeType === 1 && ++diff && node === elem ) {

									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];

									break;

								}

							}



						} else {

							// Use previously-cached element index if available

							if ( useCache ) {

								// ...in a gzip-friendly way

								node = elem;

								outerCache = node[ expando ] || (node[ expando ] = {});



								// Support: IE <9 only

								// Defend against cloned attroperties (jQuery gh-1709)

								uniqueCache = outerCache[ node.uniqueID ] ||

									(outerCache[ node.uniqueID ] = {});



								cache = uniqueCache[ type ] || [];

								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];

								diff = nodeIndex;

							}



							// xml :nth-child(...)

							// or :nth-last-child(...) or :nth(-last)?-of-type(...)

							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									(diff = nodeIndex = 0) || start.pop()) ) {



									if ( ( ofType ?

										node.nodeName.toLowerCase() === name :

										node.nodeType === 1 ) &&

										++diff ) {



										// Cache the index of each encountered element

										if ( useCache ) {

											outerCache = node[ expando ] || (node[ expando ] = {});



											// Support: IE <9 only

											// Defend against cloned attroperties (jQuery gh-1709)

											uniqueCache = outerCache[ node.uniqueID ] ||

												(outerCache[ node.uniqueID ] = {});



											uniqueCache[ type ] = [ dirruns, diff ];

										}



										if ( node === elem ) {

											break;

										}

									}

								}

							}

						}



						// Incorporate the offset, then check against cycle size

						diff -= last;

						return diff === first || ( diff % first === 0 && diff / first >= 0 );

					}

				};

		},



		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive

			// http://www.w3.org/TR/selectors/#pseudo-classes

			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters

			// Remember that setFilters inherits from pseudos

			var args,

				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||

					Sizzle.error( "unsupported pseudo: " + pseudo );



			// The user may use createPseudo to indicate that

			// arguments are needed to create the filter function

			// just as Sizzle does

			if ( fn[ expando ] ) {

				return fn( argument );

			}



			// But maintain support for old signatures

			if ( fn.length > 1 ) {

				args = [ pseudo, pseudo, "", argument ];

				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?

					markFunction(function( seed, matches ) {

						var idx,

							matched = fn( seed, argument ),

							i = matched.length;

						while ( i-- ) {

							idx = indexOf( seed, matched[i] );

							seed[ idx ] = !( matches[ idx ] = matched[i] );

						}

					}) :

					function( elem ) {

						return fn( elem, 0, args );

					};

			}



			return fn;

		}

	},



	pseudos: {

		// Potentially complex pseudos

		"not": markFunction(function( selector ) {

			// Trim the selector passed to compile

			// to avoid treating leading and trailing

			// spaces as combinators

			var input = [],

				results = [],

				matcher = compile( selector.replace( rtrim, "$1" ) );



			return matcher[ expando ] ?

				markFunction(function( seed, matches, context, xml ) {

					var elem,

						unmatched = matcher( seed, null, xml, [] ),

						i = seed.length;



					// Match elements unmatched by `matcher`

					while ( i-- ) {

						if ( (elem = unmatched[i]) ) {

							seed[i] = !(matches[i] = elem);

						}

					}

				}) :

				function( elem, context, xml ) {

					input[0] = elem;

					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)

					input[0] = null;

					return !results.pop();

				};

		}),



		"has": markFunction(function( selector ) {

			return function( elem ) {

				return Sizzle( selector, elem ).length > 0;

			};

		}),



		"contains": markFunction(function( text ) {

			text = text.replace( runescape, funescape );

			return function( elem ) {

				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;

			};

		}),



		// "Whether an element is represented by a :lang() selector

		// is based solely on the element's language value

		// being equal to the identifier C,

		// or beginning with the identifier C immediately followed by "-".

		// The matching of C against the element's language value is performed case-insensitively.

		// The identifier C does not have to be a valid language name."

		// http://www.w3.org/TR/selectors/#lang-pseudo

		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier

			if ( !ridentifier.test(lang || "") ) {

				Sizzle.error( "unsupported lang: " + lang );

			}

			lang = lang.replace( runescape, funescape ).toLowerCase();

			return function( elem ) {

				var elemLang;

				do {

					if ( (elemLang = documentIsHTML ?

						elem.lang :

						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {



						elemLang = elemLang.toLowerCase();

						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;

					}

				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );

				return false;

			};

		}),



		// Miscellaneous

		"target": function( elem ) {

			var hash = window.location && window.location.hash;

			return hash && hash.slice( 1 ) === elem.id;

		},



		"root": function( elem ) {

			return elem === docElem;

		},



		"focus": function( elem ) {

			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);

		},



		// Boolean properties

		"enabled": createDisabledPseudo( false ),

		"disabled": createDisabledPseudo( true ),



		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements

			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked

			var nodeName = elem.nodeName.toLowerCase();

			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);

		},



		"selected": function( elem ) {

			// Accessing this property makes selected-by-default

			// options in Safari work properly

			if ( elem.parentNode ) {

				elem.parentNode.selectedIndex;

			}



			return elem.selected === true;

		},



		// Contents

		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo

			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),

			//   but not by others (comment: 8; processing instruction: 7; etc.)

			// nodeType < 6 works because attributes (2) do not appear as children

			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {

				if ( elem.nodeType < 6 ) {

					return false;

				}

			}

			return true;

		},



		"parent": function( elem ) {

			return !Expr.pseudos["empty"]( elem );

		},



		// Element/input types

		"header": function( elem ) {

			return rheader.test( elem.nodeName );

		},



		"input": function( elem ) {

			return rinputs.test( elem.nodeName );

		},



		"button": function( elem ) {

			var name = elem.nodeName.toLowerCase();

			return name === "input" && elem.type === "button" || name === "button";

		},



		"text": function( elem ) {

			var attr;

			return elem.nodeName.toLowerCase() === "input" &&

				elem.type === "text" &&



				// Support: IE<8

				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"

				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );

		},



		// Position-in-collection

		"first": createPositionalPseudo(function() {

			return [ 0 ];

		}),



		"last": createPositionalPseudo(function( matchIndexes, length ) {

			return [ length - 1 ];

		}),



		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {

			return [ argument < 0 ? argument + length : argument ];

		}),



		"even": createPositionalPseudo(function( matchIndexes, length ) {

			var i = 0;

			for ( ; i < length; i += 2 ) {

				matchIndexes.push( i );

			}

			return matchIndexes;

		}),



		"odd": createPositionalPseudo(function( matchIndexes, length ) {

			var i = 1;

			for ( ; i < length; i += 2 ) {

				matchIndexes.push( i );

			}

			return matchIndexes;

		}),



		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {

			var i = argument < 0 ? argument + length : argument;

			for ( ; --i >= 0; ) {

				matchIndexes.push( i );

			}

			return matchIndexes;

		}),



		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {

			var i = argument < 0 ? argument + length : argument;

			for ( ; ++i < length; ) {

				matchIndexes.push( i );

			}

			return matchIndexes;

		})

	}

};



Expr.pseudos["nth"] = Expr.pseudos["eq"];



// Add button/input type pseudos

for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {

	Expr.pseudos[ i ] = createInputPseudo( i );

}

for ( i in { submit: true, reset: true } ) {

	Expr.pseudos[ i ] = createButtonPseudo( i );

}



// Easy API for creating new setFilters

function setFilters() {}

setFilters.prototype = Expr.filters = Expr.pseudos;

Expr.setFilters = new setFilters();



tokenize = Sizzle.tokenize = function( selector, parseOnly ) {

	var matched, match, tokens, type,

		soFar, groups, preFilters,

		cached = tokenCache[ selector + " " ];



	if ( cached ) {

		return parseOnly ? 0 : cached.slice( 0 );

	}



	soFar = selector;

	groups = [];

	preFilters = Expr.preFilter;



	while ( soFar ) {



		// Comma and first run

		if ( !matched || (match = rcomma.exec( soFar )) ) {

			if ( match ) {

				// Don't consume trailing commas as valid

				soFar = soFar.slice( match[0].length ) || soFar;

			}

			groups.push( (tokens = []) );

		}



		matched = false;



		// Combinators

		if ( (match = rcombinators.exec( soFar )) ) {

			matched = match.shift();

			tokens.push({

				value: matched,

				// Cast descendant combinators to space

				type: match[0].replace( rtrim, " " )

			});

			soFar = soFar.slice( matched.length );

		}



		// Filters

		for ( type in Expr.filter ) {

			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||

				(match = preFilters[ type ]( match ))) ) {

				matched = match.shift();

				tokens.push({

					value: matched,

					type: type,

					matches: match

				});

				soFar = soFar.slice( matched.length );

			}

		}



		if ( !matched ) {

			break;

		}

	}



	// Return the length of the invalid excess

	// if we're just parsing

	// Otherwise, throw an error or return tokens

	return parseOnly ?

		soFar.length :

		soFar ?

			Sizzle.error( selector ) :

			// Cache the tokens

			tokenCache( selector, groups ).slice( 0 );

};



function toSelector( tokens ) {

	var i = 0,

		len = tokens.length,

		selector = "";

	for ( ; i < len; i++ ) {

		selector += tokens[i].value;

	}

	return selector;

}



function addCombinator( matcher, combinator, base ) {

	var dir = combinator.dir,

		skip = combinator.next,

		key = skip || dir,

		checkNonElements = base && key === "parentNode",

		doneName = done++;



	return combinator.first ?

		// Check against closest ancestor/preceding element

		function( elem, context, xml ) {

			while ( (elem = elem[ dir ]) ) {

				if ( elem.nodeType === 1 || checkNonElements ) {

					return matcher( elem, context, xml );

				}

			}

			return false;

		} :



		// Check against all ancestor/preceding elements

		function( elem, context, xml ) {

			var oldCache, uniqueCache, outerCache,

				newCache = [ dirruns, doneName ];



			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

			if ( xml ) {

				while ( (elem = elem[ dir ]) ) {

					if ( elem.nodeType === 1 || checkNonElements ) {

						if ( matcher( elem, context, xml ) ) {

							return true;

						}

					}

				}

			} else {

				while ( (elem = elem[ dir ]) ) {

					if ( elem.nodeType === 1 || checkNonElements ) {

						outerCache = elem[ expando ] || (elem[ expando ] = {});



						// Support: IE <9 only

						// Defend against cloned attroperties (jQuery gh-1709)

						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});



						if ( skip && skip === elem.nodeName.toLowerCase() ) {

							elem = elem[ dir ] || elem;

						} else if ( (oldCache = uniqueCache[ key ]) &&

							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {



							// Assign to newCache so results back-propagate to previous elements

							return (newCache[ 2 ] = oldCache[ 2 ]);

						} else {

							// Reuse newcache so results back-propagate to previous elements

							uniqueCache[ key ] = newCache;



							// A match means we're done; a fail means we have to keep checking

							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {

								return true;

							}

						}

					}

				}

			}

			return false;

		};

}



function elementMatcher( matchers ) {

	return matchers.length > 1 ?

		function( elem, context, xml ) {

			var i = matchers.length;

			while ( i-- ) {

				if ( !matchers[i]( elem, context, xml ) ) {

					return false;

				}

			}

			return true;

		} :

		matchers[0];

}



function multipleContexts( selector, contexts, results ) {

	var i = 0,

		len = contexts.length;

	for ( ; i < len; i++ ) {

		Sizzle( selector, contexts[i], results );

	}

	return results;

}



function condense( unmatched, map, filter, context, xml ) {

	var elem,

		newUnmatched = [],

		i = 0,

		len = unmatched.length,

		mapped = map != null;



	for ( ; i < len; i++ ) {

		if ( (elem = unmatched[i]) ) {

			if ( !filter || filter( elem, context, xml ) ) {

				newUnmatched.push( elem );

				if ( mapped ) {

					map.push( i );

				}

			}

		}

	}



	return newUnmatched;

}



function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {

	if ( postFilter && !postFilter[ expando ] ) {

		postFilter = setMatcher( postFilter );

	}

	if ( postFinder && !postFinder[ expando ] ) {

		postFinder = setMatcher( postFinder, postSelector );

	}

	return markFunction(function( seed, results, context, xml ) {

		var temp, i, elem,

			preMap = [],

			postMap = [],

			preexisting = results.length,



			// Get initial elements from seed or context

			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),



			// Prefilter to get matcher input, preserving a map for seed-results synchronization

			matcherIn = preFilter && ( seed || !selector ) ?

				condense( elems, preMap, preFilter, context, xml ) :

				elems,



			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,

				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?



					// ...intermediate processing is necessary

					[] :



					// ...otherwise use results directly

					results :

				matcherIn;



		// Find primary matches

		if ( matcher ) {

			matcher( matcherIn, matcherOut, context, xml );

		}



		// Apply postFilter

		if ( postFilter ) {

			temp = condense( matcherOut, postMap );

			postFilter( temp, [], context, xml );



			// Un-match failing elements by moving them back to matcherIn

			i = temp.length;

			while ( i-- ) {

				if ( (elem = temp[i]) ) {

					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);

				}

			}

		}



		if ( seed ) {

			if ( postFinder || preFilter ) {

				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts

					temp = [];

					i = matcherOut.length;

					while ( i-- ) {

						if ( (elem = matcherOut[i]) ) {

							// Restore matcherIn since elem is not yet a final match

							temp.push( (matcherIn[i] = elem) );

						}

					}

					postFinder( null, (matcherOut = []), temp, xml );

				}



				// Move matched elements from seed to results to keep them synchronized

				i = matcherOut.length;

				while ( i-- ) {

					if ( (elem = matcherOut[i]) &&

						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {



						seed[temp] = !(results[temp] = elem);

					}

				}

			}



		// Add elements to results, through postFinder if defined

		} else {

			matcherOut = condense(

				matcherOut === results ?

					matcherOut.splice( preexisting, matcherOut.length ) :

					matcherOut

			);

			if ( postFinder ) {

				postFinder( null, results, matcherOut, xml );

			} else {

				push.apply( results, matcherOut );

			}

		}

	});

}



function matcherFromTokens( tokens ) {

	var checkContext, matcher, j,

		len = tokens.length,

		leadingRelative = Expr.relative[ tokens[0].type ],

		implicitRelative = leadingRelative || Expr.relative[" "],

		i = leadingRelative ? 1 : 0,



		// The foundational matcher ensures that elements are reachable from top-level context(s)

		matchContext = addCombinator( function( elem ) {

			return elem === checkContext;

		}, implicitRelative, true ),

		matchAnyContext = addCombinator( function( elem ) {

			return indexOf( checkContext, elem ) > -1;

		}, implicitRelative, true ),

		matchers = [ function( elem, context, xml ) {

			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (

				(checkContext = context).nodeType ?

					matchContext( elem, context, xml ) :

					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)

			checkContext = null;

			return ret;

		} ];



	for ( ; i < len; i++ ) {

		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {

			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];

		} else {

			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );



			// Return special upon seeing a positional matcher

			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling

				j = ++i;

				for ( ; j < len; j++ ) {

					if ( Expr.relative[ tokens[j].type ] ) {

						break;

					}

				}

				return setMatcher(

					i > 1 && elementMatcher( matchers ),

					i > 1 && toSelector(

						// If the preceding token was a descendant combinator, insert an implicit any-element `*`

						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })

					).replace( rtrim, "$1" ),

					matcher,

					i < j && matcherFromTokens( tokens.slice( i, j ) ),

					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),

					j < len && toSelector( tokens )

				);

			}

			matchers.push( matcher );

		}

	}



	return elementMatcher( matchers );

}



function matcherFromGroupMatchers( elementMatchers, setMatchers ) {

	var bySet = setMatchers.length > 0,

		byElement = elementMatchers.length > 0,

		superMatcher = function( seed, context, xml, results, outermost ) {

			var elem, j, matcher,

				matchedCount = 0,

				i = "0",

				unmatched = seed && [],

				setMatched = [],

				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context

				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher

				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),

				len = elems.length;



			if ( outermost ) {

				outermostContext = context === document || context || outermost;

			}



			// Add elements passing elementMatchers directly to results

			// Support: IE<9, Safari

			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id

			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {

				if ( byElement && elem ) {

					j = 0;

					if ( !context && elem.ownerDocument !== document ) {

						setDocument( elem );

						xml = !documentIsHTML;

					}

					while ( (matcher = elementMatchers[j++]) ) {

						if ( matcher( elem, context || document, xml) ) {

							results.push( elem );

							break;

						}

					}

					if ( outermost ) {

						dirruns = dirrunsUnique;

					}

				}



				// Track unmatched elements for set filters

				if ( bySet ) {

					// They will have gone through all possible matchers

					if ( (elem = !matcher && elem) ) {

						matchedCount--;

					}



					// Lengthen the array for every element, matched or not

					if ( seed ) {

						unmatched.push( elem );

					}

				}

			}



			// `i` is now the count of elements visited above, and adding it to `matchedCount`

			// makes the latter nonnegative.

			matchedCount += i;



			// Apply set filters to unmatched elements

			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`

			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have

			// no element matchers and no seed.

			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that

			// case, which will result in a "00" `matchedCount` that differs from `i` but is also

			// numerically zero.

			if ( bySet && i !== matchedCount ) {

				j = 0;

				while ( (matcher = setMatchers[j++]) ) {

					matcher( unmatched, setMatched, context, xml );

				}



				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting

					if ( matchedCount > 0 ) {

						while ( i-- ) {

							if ( !(unmatched[i] || setMatched[i]) ) {

								setMatched[i] = pop.call( results );

							}

						}

					}



					// Discard index placeholder values to get only actual matches

					setMatched = condense( setMatched );

				}



				// Add matches to results

				push.apply( results, setMatched );



				// Seedless set matches succeeding multiple successful matchers stipulate sorting

				if ( outermost && !seed && setMatched.length > 0 &&

					( matchedCount + setMatchers.length ) > 1 ) {



					Sizzle.uniqueSort( results );

				}

			}



			// Override manipulation of globals by nested matchers

			if ( outermost ) {

				dirruns = dirrunsUnique;

				outermostContext = contextBackup;

			}



			return unmatched;

		};



	return bySet ?

		markFunction( superMatcher ) :

		superMatcher;

}



compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {

	var i,

		setMatchers = [],

		elementMatchers = [],

		cached = compilerCache[ selector + " " ];



	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element

		if ( !match ) {

			match = tokenize( selector );

		}

		i = match.length;

		while ( i-- ) {

			cached = matcherFromTokens( match[i] );

			if ( cached[ expando ] ) {

				setMatchers.push( cached );

			} else {

				elementMatchers.push( cached );

			}

		}



		// Cache the compiled function

		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );



		// Save selector and tokenization

		cached.selector = selector;

	}

	return cached;

};



/**

 * A low-level selection function that works with Sizzle's compiled

 *  selector functions

 * @param {String|Function} selector A selector or a pre-compiled

 *  selector function built with Sizzle.compile

 * @param {Element} context

 * @param {Array} [results]

 * @param {Array} [seed] A set of elements to match against

 */

select = Sizzle.select = function( selector, context, results, seed ) {

	var i, tokens, token, type, find,

		compiled = typeof selector === "function" && selector,

		match = !seed && tokenize( (selector = compiled.selector || selector) );



	results = results || [];



	// Try to minimize operations if there is only one selector in the list and no seed

	// (the latter of which guarantees us context)

	if ( match.length === 1 ) {



		// Reduce context if the leading compound selector is an ID

		tokens = match[0] = match[0].slice( 0 );

		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&

				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {



			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];

			if ( !context ) {

				return results;



			// Precompiled matchers will still verify ancestry, so step up a level

			} else if ( compiled ) {

				context = context.parentNode;

			}



			selector = selector.slice( tokens.shift().value.length );

		}



		// Fetch a seed set for right-to-left matching

		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;

		while ( i-- ) {

			token = tokens[i];



			// Abort if we hit a combinator

			if ( Expr.relative[ (type = token.type) ] ) {

				break;

			}

			if ( (find = Expr.find[ type ]) ) {

				// Search, expanding context for leading sibling combinators

				if ( (seed = find(

					token.matches[0].replace( runescape, funescape ),

					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context

				)) ) {



					// If seed is empty or no tokens remain, we can return early

					tokens.splice( i, 1 );

					selector = seed.length && toSelector( tokens );

					if ( !selector ) {

						push.apply( results, seed );

						return results;

					}



					break;

				}

			}

		}

	}



	// Compile and execute a filtering function if one is not provided

	// Provide `match` to avoid retokenization if we modified the selector above

	( compiled || compile( selector, match ) )(

		seed,

		context,

		!documentIsHTML,

		results,

		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context

	);

	return results;

};



// One-time assignments



// Sort stability

support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;



// Support: Chrome 14-35+

// Always assume duplicates if they aren't passed to the comparison function

support.detectDuplicates = !!hasDuplicate;



// Initialize against the default document

setDocument();



// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)

// Detached nodes confoundingly follow *each other*

support.sortDetached = assert(function( el ) {

	// Should return 1, but returns 4 (following)

	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;

});



// Support: IE<8

// Prevent attribute/property "interpolation"

// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

if ( !assert(function( el ) {

	el.innerHTML = "<a href='#'></a>";

	return el.firstChild.getAttribute("href") === "#" ;

}) ) {

	addHandle( "type|href|height|width", function( elem, name, isXML ) {

		if ( !isXML ) {

			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );

		}

	});

}



// Support: IE<9

// Use defaultValue in place of getAttribute("value")

if ( !support.attributes || !assert(function( el ) {

	el.innerHTML = "<input/>";

	el.firstChild.setAttribute( "value", "" );

	return el.firstChild.getAttribute( "value" ) === "";

}) ) {

	addHandle( "value", function( elem, name, isXML ) {

		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {

			return elem.defaultValue;

		}

	});

}



// Support: IE<9

// Use getAttributeNode to fetch booleans when getAttribute lies

if ( !assert(function( el ) {

	return el.getAttribute("disabled") == null;

}) ) {

	addHandle( booleans, function( elem, name, isXML ) {

		var val;

		if ( !isXML ) {

			return elem[ name ] === true ? name.toLowerCase() :

					(val = elem.getAttributeNode( name )) && val.specified ?

					val.value :

				null;

		}

	});

}



return Sizzle;



})( window );







jQuery.find = Sizzle;

jQuery.expr = Sizzle.selectors;



// Deprecated

jQuery.expr[ ":" ] = jQuery.expr.pseudos;

jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;

jQuery.text = Sizzle.getText;

jQuery.isXMLDoc = Sizzle.isXML;

jQuery.contains = Sizzle.contains;

jQuery.escapeSelector = Sizzle.escape;









var dir = function( elem, dir, until ) {

	var matched = [],

		truncate = until !== undefined;



	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {

		if ( elem.nodeType === 1 ) {

			if ( truncate && jQuery( elem ).is( until ) ) {

				break;

			}

			matched.push( elem );

		}

	}

	return matched;

};





var siblings = function( n, elem ) {

	var matched = [];



	for ( ; n; n = n.nextSibling ) {

		if ( n.nodeType === 1 && n !== elem ) {

			matched.push( n );

		}

	}



	return matched;

};





var rneedsContext = jQuery.expr.match.needsContext;







function nodeName( elem, name ) {



  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();



};

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );







// Implement the identical functionality for filter and not

function winnow( elements, qualifier, not ) {

	if ( isFunction( qualifier ) ) {

		return jQuery.grep( elements, function( elem, i ) {

			return !!qualifier.call( elem, i, elem ) !== not;

		} );

	}



	// Single element

	if ( qualifier.nodeType ) {

		return jQuery.grep( elements, function( elem ) {

			return ( elem === qualifier ) !== not;

		} );

	}



	// Arraylike of elements (jQuery, arguments, Array)

	if ( typeof qualifier !== "string" ) {

		return jQuery.grep( elements, function( elem ) {

			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;

		} );

	}



	// Filtered directly for both simple and complex selectors

	return jQuery.filter( qualifier, elements, not );

}



jQuery.filter = function( expr, elems, not ) {

	var elem = elems[ 0 ];



	if ( not ) {

		expr = ":not(" + expr + ")";

	}



	if ( elems.length === 1 && elem.nodeType === 1 ) {

		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];

	}



	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {

		return elem.nodeType === 1;

	} ) );

};



jQuery.fn.extend( {

	find: function( selector ) {

		var i, ret,

			len = this.length,

			self = this;



		if ( typeof selector !== "string" ) {

			return this.pushStack( jQuery( selector ).filter( function() {

				for ( i = 0; i < len; i++ ) {

					if ( jQuery.contains( self[ i ], this ) ) {

						return true;

					}

				}

			} ) );

		}



		ret = this.pushStack( [] );



		for ( i = 0; i < len; i++ ) {

			jQuery.find( selector, self[ i ], ret );

		}



		return len > 1 ? jQuery.uniqueSort( ret ) : ret;

	},

	filter: function( selector ) {

		return this.pushStack( winnow( this, selector || [], false ) );

	},

	not: function( selector ) {

		return this.pushStack( winnow( this, selector || [], true ) );

	},

	is: function( selector ) {

		return !!winnow(

			this,



			// If this is a positional/relative selector, check membership in the returned set

			// so $("p:first").is("p:last") won't return true for a doc with two "p".

			typeof selector === "string" && rneedsContext.test( selector ) ?

				jQuery( selector ) :

				selector || [],

			false

		).length;

	}

} );





// Initialize a jQuery object





// A central reference to the root jQuery(document)

var rootjQuery,



	// A simple way to check for HTML strings

	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)

	// Strict HTML recognition (#11290: must start with <)

	// Shortcut simple #id case for speed

	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,



	init = jQuery.fn.init = function( selector, context, root ) {

		var match, elem;



		// HANDLE: $(""), $(null), $(undefined), $(false)

		if ( !selector ) {

			return this;

		}



		// Method init() accepts an alternate rootjQuery

		// so migrate can support jQuery.sub (gh-2101)

		root = root || rootjQuery;



		// Handle HTML strings

		if ( typeof selector === "string" ) {

			if ( selector[ 0 ] === "<" &&

				selector[ selector.length - 1 ] === ">" &&

				selector.length >= 3 ) {



				// Assume that strings that start and end with <> are HTML and skip the regex check

				match = [ null, selector, null ];



			} else {

				match = rquickExpr.exec( selector );

			}



			// Match html or make sure no context is specified for #id

			if ( match && ( match[ 1 ] || !context ) ) {



				// HANDLE: $(html) -> $(array)

				if ( match[ 1 ] ) {

					context = context instanceof jQuery ? context[ 0 ] : context;



					// Option to run scripts is true for back-compat

					// Intentionally let the error be thrown if parseHTML is not present

					jQuery.merge( this, jQuery.parseHTML(

						match[ 1 ],

						context && context.nodeType ? context.ownerDocument || context : document,

						true

					) );



					// HANDLE: $(html, props)

					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {

						for ( match in context ) {



							// Properties of context are called as methods if possible

							if ( isFunction( this[ match ] ) ) {

								this[ match ]( context[ match ] );



							// ...and otherwise set as attributes

							} else {

								this.attr( match, context[ match ] );

							}

						}

					}



					return this;



				// HANDLE: $(#id)

				} else {

					elem = document.getElementById( match[ 2 ] );



					if ( elem ) {



						// Inject the element directly into the jQuery object

						this[ 0 ] = elem;

						this.length = 1;

					}

					return this;

				}



			// HANDLE: $(expr, $(...))

			} else if ( !context || context.jquery ) {

				return ( context || root ).find( selector );



			// HANDLE: $(expr, context)

			// (which is just equivalent to: $(context).find(expr)

			} else {

				return this.constructor( context ).find( selector );

			}



		// HANDLE: $(DOMElement)

		} else if ( selector.nodeType ) {

			this[ 0 ] = selector;

			this.length = 1;

			return this;



		// HANDLE: $(function)

		// Shortcut for document ready

		} else if ( isFunction( selector ) ) {

			return root.ready !== undefined ?

				root.ready( selector ) :



				// Execute immediately if ready is not present

				selector( jQuery );

		}



		return jQuery.makeArray( selector, this );

	};



// Give the init function the jQuery prototype for later instantiation

init.prototype = jQuery.fn;



// Initialize central reference

rootjQuery = jQuery( document );





var rparentsprev = /^(?:parents|prev(?:Until|All))/,



	// Methods guaranteed to produce a unique set when starting from a unique set

	guaranteedUnique = {

		children: true,

		contents: true,

		next: true,

		prev: true

	};



jQuery.fn.extend( {

	has: function( target ) {

		var targets = jQuery( target, this ),

			l = targets.length;



		return this.filter( function() {

			var i = 0;

			for ( ; i < l; i++ ) {

				if ( jQuery.contains( this, targets[ i ] ) ) {

					return true;

				}

			}

		} );

	},



	closest: function( selectors, context ) {

		var cur,

			i = 0,

			l = this.length,

			matched = [],

			targets = typeof selectors !== "string" && jQuery( selectors );



		// Positional selectors never match, since there's no _selection_ context

		if ( !rneedsContext.test( selectors ) ) {

			for ( ; i < l; i++ ) {

				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {



					// Always skip document fragments

					if ( cur.nodeType < 11 && ( targets ?

						targets.index( cur ) > -1 :



						// Don't pass non-elements to Sizzle

						cur.nodeType === 1 &&

							jQuery.find.matchesSelector( cur, selectors ) ) ) {



						matched.push( cur );

						break;

					}

				}

			}

		}



		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );

	},



	// Determine the position of an element within the set

	index: function( elem ) {



		// No argument, return index in parent

		if ( !elem ) {

			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;

		}



		// Index in selector

		if ( typeof elem === "string" ) {

			return indexOf.call( jQuery( elem ), this[ 0 ] );

		}



		// Locate the position of the desired element

		return indexOf.call( this,



			// If it receives a jQuery object, the first element is used

			elem.jquery ? elem[ 0 ] : elem

		);

	},



	add: function( selector, context ) {

		return this.pushStack(

			jQuery.uniqueSort(

				jQuery.merge( this.get(), jQuery( selector, context ) )

			)

		);

	},



	addBack: function( selector ) {

		return this.add( selector == null ?

			this.prevObject : this.prevObject.filter( selector )

		);

	}

} );



function sibling( cur, dir ) {

	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}

	return cur;

}



jQuery.each( {

	parent: function( elem ) {

		var parent = elem.parentNode;

		return parent && parent.nodeType !== 11 ? parent : null;

	},

	parents: function( elem ) {

		return dir( elem, "parentNode" );

	},

	parentsUntil: function( elem, i, until ) {

		return dir( elem, "parentNode", until );

	},

	next: function( elem ) {

		return sibling( elem, "nextSibling" );

	},

	prev: function( elem ) {

		return sibling( elem, "previousSibling" );

	},

	nextAll: function( elem ) {

		return dir( elem, "nextSibling" );

	},

	prevAll: function( elem ) {

		return dir( elem, "previousSibling" );

	},

	nextUntil: function( elem, i, until ) {

		return dir( elem, "nextSibling", until );

	},

	prevUntil: function( elem, i, until ) {

		return dir( elem, "previousSibling", until );

	},

	siblings: function( elem ) {

		return siblings( ( elem.parentNode || {} ).firstChild, elem );

	},

	children: function( elem ) {

		return siblings( elem.firstChild );

	},

	contents: function( elem ) {

        if ( nodeName( elem, "iframe" ) ) {

            return elem.contentDocument;

        }



        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only

        // Treat the template element as a regular one in browsers that

        // don't support it.

        if ( nodeName( elem, "template" ) ) {

            elem = elem.content || elem;

        }



        return jQuery.merge( [], elem.childNodes );

	}

}, function( name, fn ) {

	jQuery.fn[ name ] = function( until, selector ) {

		var matched = jQuery.map( this, fn, until );



		if ( name.slice( -5 ) !== "Until" ) {

			selector = until;

		}



		if ( selector && typeof selector === "string" ) {

			matched = jQuery.filter( selector, matched );

		}



		if ( this.length > 1 ) {



			// Remove duplicates

			if ( !guaranteedUnique[ name ] ) {

				jQuery.uniqueSort( matched );

			}



			// Reverse order for parents* and prev-derivatives

			if ( rparentsprev.test( name ) ) {

				matched.reverse();

			}

		}



		return this.pushStack( matched );

	};

} );

var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );







// Convert String-formatted options into Object-formatted ones

function createOptions( options ) {

	var object = {};

	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {

		object[ flag ] = true;

	} );

	return object;

}



/*

 * Create a callback list using the following parameters:

 *

 *	options: an optional list of space-separated options that will change how

 *			the callback list behaves or a more traditional option object

 *

 * By default a callback list will act like an event callback list and can be

 * "fired" multiple times.

 *

 * Possible options:

 *

 *	once:			will ensure the callback list can only be fired once (like a Deferred)

 *

 *	memory:			will keep track of previous values and will call any callback added

 *					after the list has been fired right away with the latest "memorized"

 *					values (like a Deferred)

 *

 *	unique:			will ensure a callback can only be added once (no duplicate in the list)

 *

 *	stopOnFalse:	interrupt callings when a callback returns false

 *

 */

jQuery.Callbacks = function( options ) {



	// Convert options from String-formatted to Object-formatted if needed

	// (we check in cache first)

	options = typeof options === "string" ?

		createOptions( options ) :

		jQuery.extend( {}, options );



	var // Flag to know if list is currently firing

		firing,



		// Last fire value for non-forgettable lists

		memory,



		// Flag to know if list was already fired

		fired,



		// Flag to prevent firing

		locked,



		// Actual callback list

		list = [],



		// Queue of execution data for repeatable lists

		queue = [],



		// Index of currently firing callback (modified by add/remove as needed)

		firingIndex = -1,



		// Fire callbacks

		fire = function() {



			// Enforce single-firing

			locked = locked || options.once;



			// Execute callbacks for all pending executions,

			// respecting firingIndex overrides and runtime changes

			fired = firing = true;

			for ( ; queue.length; firingIndex = -1 ) {

				memory = queue.shift();

				while ( ++firingIndex < list.length ) {



					// Run callback and check for early termination

					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&

						options.stopOnFalse ) {



						// Jump to end and forget the data so .add doesn't re-fire

						firingIndex = list.length;

						memory = false;

					}

				}

			}



			// Forget the data if we're done with it

			if ( !options.memory ) {

				memory = false;

			}



			firing = false;



			// Clean up if we're done firing for good

			if ( locked ) {



				// Keep an empty list if we have data for future add calls

				if ( memory ) {

					list = [];



				// Otherwise, this object is spent

				} else {

					list = "";

				}

			}

		},



		// Actual Callbacks object

		self = {



			// Add a callback or a collection of callbacks to the list

			add: function() {

				if ( list ) {



					// If we have memory from a past run, we should fire after adding

					if ( memory && !firing ) {

						firingIndex = list.length - 1;

						queue.push( memory );

					}



					( function add( args ) {

						jQuery.each( args, function( _, arg ) {

							if ( isFunction( arg ) ) {

								if ( !options.unique || !self.has( arg ) ) {

									list.push( arg );

								}

							} else if ( arg && arg.length && toType( arg ) !== "string" ) {



								// Inspect recursively

								add( arg );

							}

						} );

					} )( arguments );



					if ( memory && !firing ) {

						fire();

					}

				}

				return this;

			},



			// Remove a callback from the list

			remove: function() {

				jQuery.each( arguments, function( _, arg ) {

					var index;

					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {

						list.splice( index, 1 );



						// Handle firing indexes

						if ( index <= firingIndex ) {

							firingIndex--;

						}

					}

				} );

				return this;

			},



			// Check if a given callback is in the list.

			// If no argument is given, return whether or not list has callbacks attached.

			has: function( fn ) {

				return fn ?

					jQuery.inArray( fn, list ) > -1 :

					list.length > 0;

			},



			// Remove all callbacks from the list

			empty: function() {

				if ( list ) {

					list = [];

				}

				return this;

			},



			// Disable .fire and .add

			// Abort any current/pending executions

			// Clear all callbacks and values

			disable: function() {

				locked = queue = [];

				list = memory = "";

				return this;

			},

			disabled: function() {

				return !list;

			},



			// Disable .fire

			// Also disable .add unless we have memory (since it would have no effect)

			// Abort any pending executions

			lock: function() {

				locked = queue = [];

				if ( !memory && !firing ) {

					list = memory = "";

				}

				return this;

			},

			locked: function() {

				return !!locked;

			},



			// Call all callbacks with the given context and arguments

			fireWith: function( context, args ) {

				if ( !locked ) {

					args = args || [];

					args = [ context, args.slice ? args.slice() : args ];

					queue.push( args );

					if ( !firing ) {

						fire();

					}

				}

				return this;

			},



			// Call all the callbacks with the given arguments

			fire: function() {

				self.fireWith( this, arguments );

				return this;

			},



			// To know if the callbacks have already been called at least once

			fired: function() {

				return !!fired;

			}

		};



	return self;

};





function Identity( v ) {

	return v;

}

function Thrower( ex ) {

	throw ex;

}



function adoptValue( value, resolve, reject, noValue ) {

	var method;



	try {



		// Check for promise aspect first to privilege synchronous behavior

		if ( value && isFunction( ( method = value.promise ) ) ) {

			method.call( value ).done( resolve ).fail( reject );



		// Other thenables

		} else if ( value && isFunction( ( method = value.then ) ) ) {

			method.call( value, resolve, reject );



		// Other non-thenables

		} else {



			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:

			// * false: [ value ].slice( 0 ) => resolve( value )

			// * true: [ value ].slice( 1 ) => resolve()

			resolve.apply( undefined, [ value ].slice( noValue ) );

		}



	// For Promises/A+, convert exceptions into rejections

	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in

	// Deferred#then to conditionally suppress rejection.

	} catch ( value ) {



		// Support: Android 4.0 only

		// Strict mode functions invoked without .call/.apply get global-object context

		reject.apply( undefined, [ value ] );

	}

}



jQuery.extend( {



	Deferred: function( func ) {

		var tuples = [



				// action, add listener, callbacks,

				// ... .then handlers, argument index, [final state]

				[ "notify", "progress", jQuery.Callbacks( "memory" ),

					jQuery.Callbacks( "memory" ), 2 ],

				[ "resolve", "done", jQuery.Callbacks( "once memory" ),

					jQuery.Callbacks( "once memory" ), 0, "resolved" ],

				[ "reject", "fail", jQuery.Callbacks( "once memory" ),

					jQuery.Callbacks( "once memory" ), 1, "rejected" ]

			],

			state = "pending",

			promise = {

				state: function() {

					return state;

				},

				always: function() {

					deferred.done( arguments ).fail( arguments );

					return this;

				},

				"catch": function( fn ) {

					return promise.then( null, fn );

				},



				// Keep pipe for back-compat

				pipe: function( /* fnDone, fnFail, fnProgress */ ) {

					var fns = arguments;



					return jQuery.Deferred( function( newDefer ) {

						jQuery.each( tuples, function( i, tuple ) {



							// Map tuples (progress, done, fail) to arguments (done, fail, progress)

							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];



							// deferred.progress(function() { bind to newDefer or newDefer.notify })

							// deferred.done(function() { bind to newDefer or newDefer.resolve })

							// deferred.fail(function() { bind to newDefer or newDefer.reject })

							deferred[ tuple[ 1 ] ]( function() {

								var returned = fn && fn.apply( this, arguments );

								if ( returned && isFunction( returned.promise ) ) {

									returned.promise()

										.progress( newDefer.notify )

										.done( newDefer.resolve )

										.fail( newDefer.reject );

								} else {

									newDefer[ tuple[ 0 ] + "With" ](

										this,

										fn ? [ returned ] : arguments

									);

								}

							} );

						} );

						fns = null;

					} ).promise();

				},

				then: function( onFulfilled, onRejected, onProgress ) {

					var maxDepth = 0;

					function resolve( depth, deferred, handler, special ) {

						return function() {

							var that = this,

								args = arguments,

								mightThrow = function() {

									var returned, then;



									// Support: Promises/A+ section 2.3.3.3.3

									// https://promisesaplus.com/#point-59

									// Ignore double-resolution attempts

									if ( depth < maxDepth ) {

										return;

									}



									returned = handler.apply( that, args );



									// Support: Promises/A+ section 2.3.1

									// https://promisesaplus.com/#point-48

									if ( returned === deferred.promise() ) {

										throw new TypeError( "Thenable self-resolution" );

									}



									// Support: Promises/A+ sections 2.3.3.1, 3.5

									// https://promisesaplus.com/#point-54

									// https://promisesaplus.com/#point-75

									// Retrieve `then` only once

									then = returned &&



										// Support: Promises/A+ section 2.3.4

										// https://promisesaplus.com/#point-64

										// Only check objects and functions for thenability

										( typeof returned === "object" ||

											typeof returned === "function" ) &&

										returned.then;



									// Handle a returned thenable

									if ( isFunction( then ) ) {



										// Special processors (notify) just wait for resolution

										if ( special ) {

											then.call(

												returned,

												resolve( maxDepth, deferred, Identity, special ),

												resolve( maxDepth, deferred, Thrower, special )

											);



										// Normal processors (resolve) also hook into progress

										} else {



											// ...and disregard older resolution values

											maxDepth++;



											then.call(

												returned,

												resolve( maxDepth, deferred, Identity, special ),

												resolve( maxDepth, deferred, Thrower, special ),

												resolve( maxDepth, deferred, Identity,

													deferred.notifyWith )

											);

										}



									// Handle all other returned values

									} else {



										// Only substitute handlers pass on context

										// and multiple values (non-spec behavior)

										if ( handler !== Identity ) {

											that = undefined;

											args = [ returned ];

										}



										// Process the value(s)

										// Default process is resolve

										( special || deferred.resolveWith )( that, args );

									}

								},



								// Only normal processors (resolve) catch and reject exceptions

								process = special ?

									mightThrow :

									function() {

										try {

											mightThrow();

										} catch ( e ) {



											if ( jQuery.Deferred.exceptionHook ) {

												jQuery.Deferred.exceptionHook( e,

													process.stackTrace );

											}



											// Support: Promises/A+ section 2.3.3.3.4.1

											// https://promisesaplus.com/#point-61

											// Ignore post-resolution exceptions

											if ( depth + 1 >= maxDepth ) {



												// Only substitute handlers pass on context

												// and multiple values (non-spec behavior)

												if ( handler !== Thrower ) {

													that = undefined;

													args = [ e ];

												}



												deferred.rejectWith( that, args );

											}

										}

									};



							// Support: Promises/A+ section 2.3.3.3.1

							// https://promisesaplus.com/#point-57

							// Re-resolve promises immediately to dodge false rejection from

							// subsequent errors

							if ( depth ) {

								process();

							} else {



								// Call an optional hook to record the stack, in case of exception

								// since it's otherwise lost when execution goes async

								if ( jQuery.Deferred.getStackHook ) {

									process.stackTrace = jQuery.Deferred.getStackHook();

								}

								window.setTimeout( process );

							}

						};

					}



					return jQuery.Deferred( function( newDefer ) {



						// progress_handlers.add( ... )

						tuples[ 0 ][ 3 ].add(

							resolve(

								0,

								newDefer,

								isFunction( onProgress ) ?

									onProgress :

									Identity,

								newDefer.notifyWith

							)

						);



						// fulfilled_handlers.add( ... )

						tuples[ 1 ][ 3 ].add(

							resolve(

								0,

								newDefer,

								isFunction( onFulfilled ) ?

									onFulfilled :

									Identity

							)

						);



						// rejected_handlers.add( ... )

						tuples[ 2 ][ 3 ].add(

							resolve(

								0,

								newDefer,

								isFunction( onRejected ) ?

									onRejected :

									Thrower

							)

						);

					} ).promise();

				},



				// Get a promise for this deferred

				// If obj is provided, the promise aspect is added to the object

				promise: function( obj ) {

					return obj != null ? jQuery.extend( obj, promise ) : promise;

				}

			},

			deferred = {};



		// Add list-specific methods

		jQuery.each( tuples, function( i, tuple ) {

			var list = tuple[ 2 ],

				stateString = tuple[ 5 ];



			// promise.progress = list.add

			// promise.done = list.add

			// promise.fail = list.add

			promise[ tuple[ 1 ] ] = list.add;



			// Handle state

			if ( stateString ) {

				list.add(

					function() {



						// state = "resolved" (i.e., fulfilled)

						// state = "rejected"

						state = stateString;

					},



					// rejected_callbacks.disable

					// fulfilled_callbacks.disable

					tuples[ 3 - i ][ 2 ].disable,



					// rejected_handlers.disable

					// fulfilled_handlers.disable

					tuples[ 3 - i ][ 3 ].disable,



					// progress_callbacks.lock

					tuples[ 0 ][ 2 ].lock,



					// progress_handlers.lock

					tuples[ 0 ][ 3 ].lock

				);

			}



			// progress_handlers.fire

			// fulfilled_handlers.fire

			// rejected_handlers.fire

			list.add( tuple[ 3 ].fire );



			// deferred.notify = function() { deferred.notifyWith(...) }

			// deferred.resolve = function() { deferred.resolveWith(...) }

			// deferred.reject = function() { deferred.rejectWith(...) }

			deferred[ tuple[ 0 ] ] = function() {

				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );

				return this;

			};



			// deferred.notifyWith = list.fireWith

			// deferred.resolveWith = list.fireWith

			// deferred.rejectWith = list.fireWith

			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;

		} );



		// Make the deferred a promise

		promise.promise( deferred );



		// Call given func if any

		if ( func ) {

			func.call( deferred, deferred );

		}



		// All done!

		return deferred;

	},



	// Deferred helper

	when: function( singleValue ) {

		var



			// count of uncompleted subordinates

			remaining = arguments.length,



			// count of unprocessed arguments

			i = remaining,



			// subordinate fulfillment data

			resolveContexts = Array( i ),

			resolveValues = slice.call( arguments ),



			// the master Deferred

			master = jQuery.Deferred(),



			// subordinate callback factory

			updateFunc = function( i ) {

				return function( value ) {

					resolveContexts[ i ] = this;

					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;

					if ( !( --remaining ) ) {

						master.resolveWith( resolveContexts, resolveValues );

					}

				};

			};



		// Single- and empty arguments are adopted like Promise.resolve

		if ( remaining <= 1 ) {

			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,

				!remaining );



			// Use .then() to unwrap secondary thenables (cf. gh-3000)

			if ( master.state() === "pending" ||

				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {



				return master.then();

			}

		}



		// Multiple arguments are aggregated like Promise.all array elements

		while ( i-- ) {

			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );

		}



		return master.promise();

	}

} );





// These usually indicate a programmer mistake during development,

// warn about them ASAP rather than swallowing them by default.

var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;



jQuery.Deferred.exceptionHook = function( error, stack ) {



	// Support: IE 8 - 9 only

	// Console exists when dev tools are open, which can happen at any time

	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {

		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );

	}

};









jQuery.readyException = function( error ) {

	window.setTimeout( function() {

		throw error;

	} );

};









// The deferred used on DOM ready

var readyList = jQuery.Deferred();



jQuery.fn.ready = function( fn ) {



	readyList

		.then( fn )



		// Wrap jQuery.readyException in a function so that the lookup

		// happens at the time of error handling instead of callback

		// registration.

		.catch( function( error ) {

			jQuery.readyException( error );

		} );



	return this;

};



jQuery.extend( {



	// Is the DOM ready to be used? Set to true once it occurs.

	isReady: false,



	// A counter to track how many items to wait for before

	// the ready event fires. See #6781

	readyWait: 1,



	// Handle when the DOM is ready

	ready: function( wait ) {



		// Abort if there are pending holds or we're already ready

		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {

			return;

		}



		// Remember that the DOM is ready

		jQuery.isReady = true;



		// If a normal DOM Ready event fired, decrement, and wait if need be

		if ( wait !== true && --jQuery.readyWait > 0 ) {

			return;

		}



		// If there are functions bound, to execute

		readyList.resolveWith( document, [ jQuery ] );

	}

} );



jQuery.ready.then = readyList.then;



// The ready event handler and self cleanup method

function completed() {

	document.removeEventListener( "DOMContentLoaded", completed );

	window.removeEventListener( "load", completed );

	jQuery.ready();

}



// Catch cases where $(document).ready() is called

// after the browser event has already occurred.

// Support: IE <=9 - 10 only

// Older IE sometimes signals "interactive" too soon

if ( document.readyState === "complete" ||

	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {



	// Handle it asynchronously to allow scripts the opportunity to delay ready

	window.setTimeout( jQuery.ready );



} else {



	// Use the handy event callback

	document.addEventListener( "DOMContentLoaded", completed );



	// A fallback to window.onload, that will always work

	window.addEventListener( "load", completed );

}









// Multifunctional method to get and set values of a collection

// The value/s can optionally be executed if it's a function

var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {

	var i = 0,

		len = elems.length,

		bulk = key == null;



	// Sets many values

	if ( toType( key ) === "object" ) {

		chainable = true;

		for ( i in key ) {

			access( elems, fn, i, key[ i ], true, emptyGet, raw );

		}



	// Sets one value

	} else if ( value !== undefined ) {

		chainable = true;



		if ( !isFunction( value ) ) {

			raw = true;

		}



		if ( bulk ) {



			// Bulk operations run against the entire set

			if ( raw ) {

				fn.call( elems, value );

				fn = null;



			// ...except when executing function values

			} else {

				bulk = fn;

				fn = function( elem, key, value ) {

					return bulk.call( jQuery( elem ), value );

				};

			}

		}



		if ( fn ) {

			for ( ; i < len; i++ ) {

				fn(

					elems[ i ], key, raw ?

					value :

					value.call( elems[ i ], i, fn( elems[ i ], key ) )

				);

			}

		}

	}



	if ( chainable ) {

		return elems;

	}



	// Gets

	if ( bulk ) {

		return fn.call( elems );

	}



	return len ? fn( elems[ 0 ], key ) : emptyGet;

};





// Matches dashed string for camelizing

var rmsPrefix = /^-ms-/,

	rdashAlpha = /-([a-z])/g;



// Used by camelCase as callback to replace()

function fcamelCase( all, letter ) {

	return letter.toUpperCase();

}



// Convert dashed to camelCase; used by the css and data modules

// Support: IE <=9 - 11, Edge 12 - 15

// Microsoft forgot to hump their vendor prefix (#9572)

function camelCase( string ) {

	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );

}

var acceptData = function( owner ) {



	// Accepts only:

	//  - Node

	//    - Node.ELEMENT_NODE

	//    - Node.DOCUMENT_NODE

	//  - Object

	//    - Any

	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );

};









function Data() {

	this.expando = jQuery.expando + Data.uid++;

}



Data.uid = 1;



Data.prototype = {



	cache: function( owner ) {



		// Check if the owner object already has a cache

		var value = owner[ this.expando ];



		// If not, create one

		if ( !value ) {

			value = {};



			// We can accept data for non-element nodes in modern browsers,

			// but we should not, see #8335.

			// Always return an empty object.

			if ( acceptData( owner ) ) {



				// If it is a node unlikely to be stringify-ed or looped over

				// use plain assignment

				if ( owner.nodeType ) {

					owner[ this.expando ] = value;



				// Otherwise secure it in a non-enumerable property

				// configurable must be true to allow the property to be

				// deleted when data is removed

				} else {

					Object.defineProperty( owner, this.expando, {

						value: value,

						configurable: true

					} );

				}

			}

		}



		return value;

	},

	set: function( owner, data, value ) {

		var prop,

			cache = this.cache( owner );



		// Handle: [ owner, key, value ] args

		// Always use camelCase key (gh-2257)

		if ( typeof data === "string" ) {

			cache[ camelCase( data ) ] = value;



		// Handle: [ owner, { properties } ] args

		} else {



			// Copy the properties one-by-one to the cache object

			for ( prop in data ) {

				cache[ camelCase( prop ) ] = data[ prop ];

			}

		}

		return cache;

	},

	get: function( owner, key ) {

		return key === undefined ?

			this.cache( owner ) :



			// Always use camelCase key (gh-2257)

			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];

	},

	access: function( owner, key, value ) {



		// In cases where either:

		//

		//   1. No key was specified

		//   2. A string key was specified, but no value provided

		//

		// Take the "read" path and allow the get method to determine

		// which value to return, respectively either:

		//

		//   1. The entire cache object

		//   2. The data stored at the key

		//

		if ( key === undefined ||

				( ( key && typeof key === "string" ) && value === undefined ) ) {



			return this.get( owner, key );

		}



		// When the key is not a string, or both a key and value

		// are specified, set or extend (existing objects) with either:

		//

		//   1. An object of properties

		//   2. A key and value

		//

		this.set( owner, key, value );



		// Since the "set" path can have two possible entry points

		// return the expected data based on which path was taken[*]

		return value !== undefined ? value : key;

	},

	remove: function( owner, key ) {

		var i,

			cache = owner[ this.expando ];



		if ( cache === undefined ) {

			return;

		}



		if ( key !== undefined ) {



			// Support array or space separated string of keys

			if ( Array.isArray( key ) ) {



				// If key is an array of keys...

				// We always set camelCase keys, so remove that.

				key = key.map( camelCase );

			} else {

				key = camelCase( key );



				// If a key with the spaces exists, use it.

				// Otherwise, create an array by matching non-whitespace

				key = key in cache ?

					[ key ] :

					( key.match( rnothtmlwhite ) || [] );

			}



			i = key.length;



			while ( i-- ) {

				delete cache[ key[ i ] ];

			}

		}



		// Remove the expando if there's no more data

		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {



			// Support: Chrome <=35 - 45

			// Webkit & Blink performance suffers when deleting properties

			// from DOM nodes, so set to undefined instead

			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)

			if ( owner.nodeType ) {

				owner[ this.expando ] = undefined;

			} else {

				delete owner[ this.expando ];

			}

		}

	},

	hasData: function( owner ) {

		var cache = owner[ this.expando ];

		return cache !== undefined && !jQuery.isEmptyObject( cache );

	}

};

var dataPriv = new Data();



var dataUser = new Data();







//	Implementation Summary

//

//	1. Enforce API surface and semantic compatibility with 1.9.x branch

//	2. Improve the module's maintainability by reducing the storage

//		paths to a single mechanism.

//	3. Use the same single mechanism to support "private" and "user" data.

//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)

//	5. Avoid exposing implementation details on user objects (eg. expando properties)

//	6. Provide a clear path for implementation upgrade to WeakMap in 2014



var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,

	rmultiDash = /[A-Z]/g;



function getData( data ) {

	if ( data === "true" ) {

		return true;

	}



	if ( data === "false" ) {

		return false;

	}



	if ( data === "null" ) {

		return null;

	}



	// Only convert to a number if it doesn't change the string

	if ( data === +data + "" ) {

		return +data;

	}



	if ( rbrace.test( data ) ) {

		return JSON.parse( data );

	}



	return data;

}



function dataAttr( elem, key, data ) {

	var name;



	// If nothing was found internally, try to fetch any

	// data from the HTML5 data-* attribute

	if ( data === undefined && elem.nodeType === 1 ) {

		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();

		data = elem.getAttribute( name );



		if ( typeof data === "string" ) {

			try {

				data = getData( data );

			} catch ( e ) {}



			// Make sure we set the data so it isn't changed later

			dataUser.set( elem, key, data );

		} else {

			data = undefined;

		}

	}

	return data;

}



jQuery.extend( {

	hasData: function( elem ) {

		return dataUser.hasData( elem ) || dataPriv.hasData( elem );

	},



	data: function( elem, name, data ) {

		return dataUser.access( elem, name, data );

	},



	removeData: function( elem, name ) {

		dataUser.remove( elem, name );

	},



	// TODO: Now that all calls to _data and _removeData have been replaced

	// with direct calls to dataPriv methods, these can be deprecated.

	_data: function( elem, name, data ) {

		return dataPriv.access( elem, name, data );

	},



	_removeData: function( elem, name ) {

		dataPriv.remove( elem, name );

	}

} );



jQuery.fn.extend( {

	data: function( key, value ) {

		var i, name, data,

			elem = this[ 0 ],

			attrs = elem && elem.attributes;



		// Gets all values

		if ( key === undefined ) {

			if ( this.length ) {

				data = dataUser.get( elem );



				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {

					i = attrs.length;

					while ( i-- ) {



						// Support: IE 11 only

						// The attrs elements can be null (#14894)

						if ( attrs[ i ] ) {

							name = attrs[ i ].name;

							if ( name.indexOf( "data-" ) === 0 ) {

								name = camelCase( name.slice( 5 ) );

								dataAttr( elem, name, data[ name ] );

							}

						}

					}

					dataPriv.set( elem, "hasDataAttrs", true );

				}

			}



			return data;

		}



		// Sets multiple values

		if ( typeof key === "object" ) {

			return this.each( function() {

				dataUser.set( this, key );

			} );

		}



		return access( this, function( value ) {

			var data;



			// The calling jQuery object (element matches) is not empty

			// (and therefore has an element appears at this[ 0 ]) and the

			// `value` parameter was not undefined. An empty jQuery object

			// will result in `undefined` for elem = this[ 0 ] which will

			// throw an exception if an attempt to read a data cache is made.

			if ( elem && value === undefined ) {



				// Attempt to get data from the cache

				// The key will always be camelCased in Data

				data = dataUser.get( elem, key );

				if ( data !== undefined ) {

					return data;

				}



				// Attempt to "discover" the data in

				// HTML5 custom data-* attrs

				data = dataAttr( elem, key );

				if ( data !== undefined ) {

					return data;

				}



				// We tried really hard, but the data doesn't exist.

				return;

			}



			// Set the data...

			this.each( function() {



				// We always store the camelCased key

				dataUser.set( this, key, value );

			} );

		}, null, value, arguments.length > 1, null, true );

	},



	removeData: function( key ) {

		return this.each( function() {

			dataUser.remove( this, key );

		} );

	}

} );





jQuery.extend( {

	queue: function( elem, type, data ) {

		var queue;



		if ( elem ) {

			type = ( type || "fx" ) + "queue";

			queue = dataPriv.get( elem, type );



			// Speed up dequeue by getting out quickly if this is just a lookup

			if ( data ) {

				if ( !queue || Array.isArray( data ) ) {

					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );

				} else {

					queue.push( data );

				}

			}

			return queue || [];

		}

	},



	dequeue: function( elem, type ) {

		type = type || "fx";



		var queue = jQuery.queue( elem, type ),

			startLength = queue.length,

			fn = queue.shift(),

			hooks = jQuery._queueHooks( elem, type ),

			next = function() {

				jQuery.dequeue( elem, type );

			};



		// If the fx queue is dequeued, always remove the progress sentinel

		if ( fn === "inprogress" ) {

			fn = queue.shift();

			startLength--;

		}



		if ( fn ) {



			// Add a progress sentinel to prevent the fx queue from being

			// automatically dequeued

			if ( type === "fx" ) {

				queue.unshift( "inprogress" );

			}



			// Clear up the last queue stop function

			delete hooks.stop;

			fn.call( elem, next, hooks );

		}



		if ( !startLength && hooks ) {

			hooks.empty.fire();

		}

	},



	// Not public - generate a queueHooks object, or return the current one

	_queueHooks: function( elem, type ) {

		var key = type + "queueHooks";

		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {

			empty: jQuery.Callbacks( "once memory" ).add( function() {

				dataPriv.remove( elem, [ type + "queue", key ] );

			} )

		} );

	}

} );



jQuery.fn.extend( {

	queue: function( type, data ) {

		var setter = 2;



		if ( typeof type !== "string" ) {

			data = type;

			type = "fx";

			setter--;

		}



		if ( arguments.length < setter ) {

			return jQuery.queue( this[ 0 ], type );

		}



		return data === undefined ?

			this :

			this.each( function() {

				var queue = jQuery.queue( this, type, data );



				// Ensure a hooks for this queue

				jQuery._queueHooks( this, type );



				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {

					jQuery.dequeue( this, type );

				}

			} );

	},

	dequeue: function( type ) {

		return this.each( function() {

			jQuery.dequeue( this, type );

		} );

	},

	clearQueue: function( type ) {

		return this.queue( type || "fx", [] );

	},



	// Get a promise resolved when queues of a certain type

	// are emptied (fx is the type by default)

	promise: function( type, obj ) {

		var tmp,

			count = 1,

			defer = jQuery.Deferred(),

			elements = this,

			i = this.length,

			resolve = function() {

				if ( !( --count ) ) {

					defer.resolveWith( elements, [ elements ] );

				}

			};



		if ( typeof type !== "string" ) {

			obj = type;

			type = undefined;

		}

		type = type || "fx";



		while ( i-- ) {

			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );

			if ( tmp && tmp.empty ) {

				count++;

				tmp.empty.add( resolve );

			}

		}

		resolve();

		return defer.promise( obj );

	}

} );

var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;



var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );





var cssExpand = [ "Top", "Right", "Bottom", "Left" ];



var isHiddenWithinTree = function( elem, el ) {



		// isHiddenWithinTree might be called from jQuery#filter function;

		// in that case, element will be second argument

		elem = el || elem;



		// Inline style trumps all

		return elem.style.display === "none" ||

			elem.style.display === "" &&



			// Otherwise, check computed style

			// Support: Firefox <=43 - 45

			// Disconnected elements can have computed display: none, so first confirm that elem is

			// in the document.

			jQuery.contains( elem.ownerDocument, elem ) &&



			jQuery.css( elem, "display" ) === "none";

	};



var swap = function( elem, options, callback, args ) {

	var ret, name,

		old = {};



	// Remember the old values, and insert the new ones

	for ( name in options ) {

		old[ name ] = elem.style[ name ];

		elem.style[ name ] = options[ name ];

	}



	ret = callback.apply( elem, args || [] );



	// Revert the old values

	for ( name in options ) {

		elem.style[ name ] = old[ name ];

	}



	return ret;

};









function adjustCSS( elem, prop, valueParts, tween ) {

	var adjusted, scale,

		maxIterations = 20,

		currentValue = tween ?

			function() {

				return tween.cur();

			} :

			function() {

				return jQuery.css( elem, prop, "" );

			},

		initial = currentValue(),

		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),



		// Starting value computation is required for potential unit mismatches

		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&

			rcssNum.exec( jQuery.css( elem, prop ) );



	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {



		// Support: Firefox <=54

		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)

		initial = initial / 2;



		// Trust units reported by jQuery.css

		unit = unit || initialInUnit[ 3 ];



		// Iteratively approximate from a nonzero starting point

		initialInUnit = +initial || 1;



		while ( maxIterations-- ) {



			// Evaluate and update our best guess (doubling guesses that zero out).

			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).

			jQuery.style( elem, prop, initialInUnit + unit );

			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {

				maxIterations = 0;

			}

			initialInUnit = initialInUnit / scale;



		}



		initialInUnit = initialInUnit * 2;

		jQuery.style( elem, prop, initialInUnit + unit );



		// Make sure we update the tween properties later on

		valueParts = valueParts || [];

	}



	if ( valueParts ) {

		initialInUnit = +initialInUnit || +initial || 0;



		// Apply relative offset (+=/-=) if specified

		adjusted = valueParts[ 1 ] ?

			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :

			+valueParts[ 2 ];

		if ( tween ) {

			tween.unit = unit;

			tween.start = initialInUnit;

			tween.end = adjusted;

		}

	}

	return adjusted;

}





var defaultDisplayMap = {};



function getDefaultDisplay( elem ) {

	var temp,

		doc = elem.ownerDocument,

		nodeName = elem.nodeName,

		display = defaultDisplayMap[ nodeName ];



	if ( display ) {

		return display;

	}



	temp = doc.body.appendChild( doc.createElement( nodeName ) );

	display = jQuery.css( temp, "display" );



	temp.parentNode.removeChild( temp );



	if ( display === "none" ) {

		display = "block";

	}

	defaultDisplayMap[ nodeName ] = display;



	return display;

}



function showHide( elements, show ) {

	var display, elem,

		values = [],

		index = 0,

		length = elements.length;



	// Determine new display value for elements that need to change

	for ( ; index < length; index++ ) {

		elem = elements[ index ];

		if ( !elem.style ) {

			continue;

		}



		display = elem.style.display;

		if ( show ) {



			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)

			// check is required in this first loop unless we have a nonempty display value (either

			// inline or about-to-be-restored)

			if ( display === "none" ) {

				values[ index ] = dataPriv.get( elem, "display" ) || null;

				if ( !values[ index ] ) {

					elem.style.display = "";

				}

			}

			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {

				values[ index ] = getDefaultDisplay( elem );

			}

		} else {

			if ( display !== "none" ) {

				values[ index ] = "none";



				// Remember what we're overwriting

				dataPriv.set( elem, "display", display );

			}

		}

	}



	// Set the display of the elements in a second loop to avoid constant reflow

	for ( index = 0; index < length; index++ ) {

		if ( values[ index ] != null ) {

			elements[ index ].style.display = values[ index ];

		}

	}



	return elements;

}



jQuery.fn.extend( {

	show: function() {

		return showHide( this, true );

	},

	hide: function() {

		return showHide( this );

	},

	toggle: function( state ) {

		if ( typeof state === "boolean" ) {

			return state ? this.show() : this.hide();

		}



		return this.each( function() {

			if ( isHiddenWithinTree( this ) ) {

				jQuery( this ).show();

			} else {

				jQuery( this ).hide();

			}

		} );

	}

} );

var rcheckableType = ( /^(?:checkbox|radio)$/i );



var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );



var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );







// We have to close these tags to support XHTML (#13200)

var wrapMap = {



	// Support: IE <=9 only

	option: [ 1, "<select multiple='multiple'>", "</select>" ],



	// XHTML parsers do not magically insert elements in the

	// same way that tag soup parsers do. So we cannot shorten

	// this by omitting <tbody> or other required elements.

	thead: [ 1, "<table>", "</table>" ],

	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],

	tr: [ 2, "<table><tbody>", "</tbody></table>" ],

	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],



	_default: [ 0, "", "" ]

};



// Support: IE <=9 only

wrapMap.optgroup = wrapMap.option;



wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;

wrapMap.th = wrapMap.td;





function getAll( context, tag ) {



	// Support: IE <=9 - 11 only

	// Use typeof to avoid zero-argument method invocation on host objects (#15151)

	var ret;



	if ( typeof context.getElementsByTagName !== "undefined" ) {

		ret = context.getElementsByTagName( tag || "*" );



	} else if ( typeof context.querySelectorAll !== "undefined" ) {

		ret = context.querySelectorAll( tag || "*" );



	} else {

		ret = [];

	}



	if ( tag === undefined || tag && nodeName( context, tag ) ) {

		return jQuery.merge( [ context ], ret );

	}



	return ret;

}





// Mark scripts as having already been evaluated

function setGlobalEval( elems, refElements ) {

	var i = 0,

		l = elems.length;



	for ( ; i < l; i++ ) {

		dataPriv.set(

			elems[ i ],

			"globalEval",

			!refElements || dataPriv.get( refElements[ i ], "globalEval" )

		);

	}

}





var rhtml = /<|&#?\w+;/;



function buildFragment( elems, context, scripts, selection, ignored ) {

	var elem, tmp, tag, wrap, contains, j,

		fragment = context.createDocumentFragment(),

		nodes = [],

		i = 0,

		l = elems.length;



	for ( ; i < l; i++ ) {

		elem = elems[ i ];



		if ( elem || elem === 0 ) {



			// Add nodes directly

			if ( toType( elem ) === "object" ) {



				// Support: Android <=4.0 only, PhantomJS 1 only

				// push.apply(_, arraylike) throws on ancient WebKit

				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );



			// Convert non-html into a text node

			} else if ( !rhtml.test( elem ) ) {

				nodes.push( context.createTextNode( elem ) );



			// Convert html into DOM nodes

			} else {

				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );



				// Deserialize a standard representation

				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();

				wrap = wrapMap[ tag ] || wrapMap._default;

				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];



				// Descend through wrappers to the right content

				j = wrap[ 0 ];

				while ( j-- ) {

					tmp = tmp.lastChild;

				}



				// Support: Android <=4.0 only, PhantomJS 1 only

				// push.apply(_, arraylike) throws on ancient WebKit

				jQuery.merge( nodes, tmp.childNodes );



				// Remember the top-level container

				tmp = fragment.firstChild;



				// Ensure the created nodes are orphaned (#12392)

				tmp.textContent = "";

			}

		}

	}



	// Remove wrapper from fragment

	fragment.textContent = "";



	i = 0;

	while ( ( elem = nodes[ i++ ] ) ) {



		// Skip elements already in the context collection (trac-4087)

		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {

			if ( ignored ) {

				ignored.push( elem );

			}

			continue;

		}



		contains = jQuery.contains( elem.ownerDocument, elem );



		// Append to fragment

		tmp = getAll( fragment.appendChild( elem ), "script" );



		// Preserve script evaluation history

		if ( contains ) {

			setGlobalEval( tmp );

		}



		// Capture executables

		if ( scripts ) {

			j = 0;

			while ( ( elem = tmp[ j++ ] ) ) {

				if ( rscriptType.test( elem.type || "" ) ) {

					scripts.push( elem );

				}

			}

		}

	}



	return fragment;

}





( function() {

	var fragment = document.createDocumentFragment(),

		div = fragment.appendChild( document.createElement( "div" ) ),

		input = document.createElement( "input" );



	// Support: Android 4.0 - 4.3 only

	// Check state lost if the name is set (#11217)

	// Support: Windows Web Apps (WWA)

	// `name` and `type` must use .setAttribute for WWA (#14901)

	input.setAttribute( "type", "radio" );

	input.setAttribute( "checked", "checked" );

	input.setAttribute( "name", "t" );



	div.appendChild( input );



	// Support: Android <=4.1 only

	// Older WebKit doesn't clone checked state correctly in fragments

	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;



	// Support: IE <=11 only

	// Make sure textarea (and checkbox) defaultValue is properly cloned

	div.innerHTML = "<textarea>x</textarea>";

	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

} )();

var documentElement = document.documentElement;







var

	rkeyEvent = /^key/,

	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,

	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;



function returnTrue() {

	return true;

}



function returnFalse() {

	return false;

}



// Support: IE <=9 only

// See #13393 for more info

function safeActiveElement() {

	try {

		return document.activeElement;

	} catch ( err ) { }

}



function on( elem, types, selector, data, fn, one ) {

	var origFn, type;



	// Types can be a map of types/handlers

	if ( typeof types === "object" ) {



		// ( types-Object, selector, data )

		if ( typeof selector !== "string" ) {



			// ( types-Object, data )

			data = data || selector;

			selector = undefined;

		}

		for ( type in types ) {

			on( elem, type, selector, data, types[ type ], one );

		}

		return elem;

	}



	if ( data == null && fn == null ) {



		// ( types, fn )

		fn = selector;

		data = selector = undefined;

	} else if ( fn == null ) {

		if ( typeof selector === "string" ) {



			// ( types, selector, fn )

			fn = data;

			data = undefined;

		} else {



			// ( types, data, fn )

			fn = data;

			data = selector;

			selector = undefined;

		}

	}

	if ( fn === false ) {

		fn = returnFalse;

	} else if ( !fn ) {

		return elem;

	}



	if ( one === 1 ) {

		origFn = fn;

		fn = function( event ) {



			// Can use an empty set, since event contains the info

			jQuery().off( event );

			return origFn.apply( this, arguments );

		};



		// Use same guid so caller can remove using origFn

		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );

	}

	return elem.each( function() {

		jQuery.event.add( this, types, fn, data, selector );

	} );

}



/*

 * Helper functions for managing events -- not part of the public interface.

 * Props to Dean Edwards' addEvent library for many of the ideas.

 */

jQuery.event = {



	global: {},



	add: function( elem, types, handler, data, selector ) {



		var handleObjIn, eventHandle, tmp,

			events, t, handleObj,

			special, handlers, type, namespaces, origType,

			elemData = dataPriv.get( elem );



		// Don't attach events to noData or text/comment nodes (but allow plain objects)

		if ( !elemData ) {

			return;

		}



		// Caller can pass in an object of custom data in lieu of the handler

		if ( handler.handler ) {

			handleObjIn = handler;

			handler = handleObjIn.handler;

			selector = handleObjIn.selector;

		}



		// Ensure that invalid selectors throw exceptions at attach time

		// Evaluate against documentElement in case elem is a non-element node (e.g., document)

		if ( selector ) {

			jQuery.find.matchesSelector( documentElement, selector );

		}



		// Make sure that the handler has a unique ID, used to find/remove it later

		if ( !handler.guid ) {

			handler.guid = jQuery.guid++;

		}



		// Init the element's event structure and main handler, if this is the first

		if ( !( events = elemData.events ) ) {

			events = elemData.events = {};

		}

		if ( !( eventHandle = elemData.handle ) ) {

			eventHandle = elemData.handle = function( e ) {



				// Discard the second event of a jQuery.event.trigger() and

				// when an event is called after a page has unloaded

				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?

					jQuery.event.dispatch.apply( elem, arguments ) : undefined;

			};

		}



		// Handle multiple events separated by a space

		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];

		t = types.length;

		while ( t-- ) {

			tmp = rtypenamespace.exec( types[ t ] ) || [];

			type = origType = tmp[ 1 ];

			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();



			// There *must* be a type, no attaching namespace-only handlers

			if ( !type ) {

				continue;

			}



			// If event changes its type, use the special event handlers for the changed type

			special = jQuery.event.special[ type ] || {};



			// If selector defined, determine special event api type, otherwise given type

			type = ( selector ? special.delegateType : special.bindType ) || type;



			// Update special based on newly reset type

			special = jQuery.event.special[ type ] || {};



			// handleObj is passed to all event handlers

			handleObj = jQuery.extend( {

				type: type,

				origType: origType,

				data: data,

				handler: handler,

				guid: handler.guid,

				selector: selector,

				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),

				namespace: namespaces.join( "." )

			}, handleObjIn );



			// Init the event handler queue if we're the first

			if ( !( handlers = events[ type ] ) ) {

				handlers = events[ type ] = [];

				handlers.delegateCount = 0;



				// Only use addEventListener if the special events handler returns false

				if ( !special.setup ||

					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {



					if ( elem.addEventListener ) {

						elem.addEventListener( type, eventHandle );

					}

				}

			}



			if ( special.add ) {

				special.add.call( elem, handleObj );



				if ( !handleObj.handler.guid ) {

					handleObj.handler.guid = handler.guid;

				}

			}



			// Add to the element's handler list, delegates in front

			if ( selector ) {

				handlers.splice( handlers.delegateCount++, 0, handleObj );

			} else {

				handlers.push( handleObj );

			}



			// Keep track of which events have ever been used, for event optimization

			jQuery.event.global[ type ] = true;

		}



	},



	// Detach an event or set of events from an element

	remove: function( elem, types, handler, selector, mappedTypes ) {



		var j, origCount, tmp,

			events, t, handleObj,

			special, handlers, type, namespaces, origType,

			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );



		if ( !elemData || !( events = elemData.events ) ) {

			return;

		}



		// Once for each type.namespace in types; type may be omitted

		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];

		t = types.length;

		while ( t-- ) {

			tmp = rtypenamespace.exec( types[ t ] ) || [];

			type = origType = tmp[ 1 ];

			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();



			// Unbind all events (on this namespace, if provided) for the element

			if ( !type ) {

				for ( type in events ) {

					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );

				}

				continue;

			}



			special = jQuery.event.special[ type ] || {};

			type = ( selector ? special.delegateType : special.bindType ) || type;

			handlers = events[ type ] || [];

			tmp = tmp[ 2 ] &&

				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );



			// Remove matching events

			origCount = j = handlers.length;

			while ( j-- ) {

				handleObj = handlers[ j ];



				if ( ( mappedTypes || origType === handleObj.origType ) &&

					( !handler || handler.guid === handleObj.guid ) &&

					( !tmp || tmp.test( handleObj.namespace ) ) &&

					( !selector || selector === handleObj.selector ||

						selector === "**" && handleObj.selector ) ) {

					handlers.splice( j, 1 );



					if ( handleObj.selector ) {

						handlers.delegateCount--;

					}

					if ( special.remove ) {

						special.remove.call( elem, handleObj );

					}

				}

			}



			// Remove generic event handler if we removed something and no more handlers exist

			// (avoids potential for endless recursion during removal of special event handlers)

			if ( origCount && !handlers.length ) {

				if ( !special.teardown ||

					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {



					jQuery.removeEvent( elem, type, elemData.handle );

				}



				delete events[ type ];

			}

		}



		// Remove data and the expando if it's no longer used

		if ( jQuery.isEmptyObject( events ) ) {

			dataPriv.remove( elem, "handle events" );

		}

	},



	dispatch: function( nativeEvent ) {



		// Make a writable jQuery.Event from the native event object

		var event = jQuery.event.fix( nativeEvent );



		var i, j, ret, matched, handleObj, handlerQueue,

			args = new Array( arguments.length ),

			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],

			special = jQuery.event.special[ event.type ] || {};



		// Use the fix-ed jQuery.Event rather than the (read-only) native event

		args[ 0 ] = event;



		for ( i = 1; i < arguments.length; i++ ) {

			args[ i ] = arguments[ i ];

		}



		event.delegateTarget = this;



		// Call the preDispatch hook for the mapped type, and let it bail if desired

		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {

			return;

		}



		// Determine handlers

		handlerQueue = jQuery.event.handlers.call( this, event, handlers );



		// Run delegates first; they may want to stop propagation beneath us

		i = 0;

		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {

			event.currentTarget = matched.elem;



			j = 0;

			while ( ( handleObj = matched.handlers[ j++ ] ) &&

				!event.isImmediatePropagationStopped() ) {



				// Triggered event must either 1) have no namespace, or 2) have namespace(s)

				// a subset or equal to those in the bound event (both can have no namespace).

				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {



					event.handleObj = handleObj;

					event.data = handleObj.data;



					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||

						handleObj.handler ).apply( matched.elem, args );



					if ( ret !== undefined ) {

						if ( ( event.result = ret ) === false ) {

							event.preventDefault();

							event.stopPropagation();

						}

					}

				}

			}

		}



		// Call the postDispatch hook for the mapped type

		if ( special.postDispatch ) {

			special.postDispatch.call( this, event );

		}



		return event.result;

	},



	handlers: function( event, handlers ) {

		var i, handleObj, sel, matchedHandlers, matchedSelectors,

			handlerQueue = [],

			delegateCount = handlers.delegateCount,

			cur = event.target;



		// Find delegate handlers

		if ( delegateCount &&



			// Support: IE <=9

			// Black-hole SVG <use> instance trees (trac-13180)

			cur.nodeType &&



			// Support: Firefox <=42

			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)

			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click

			// Support: IE 11 only

			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)

			!( event.type === "click" && event.button >= 1 ) ) {



			for ( ; cur !== this; cur = cur.parentNode || this ) {



				// Don't check non-elements (#13208)

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)

				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {

					matchedHandlers = [];

					matchedSelectors = {};

					for ( i = 0; i < delegateCount; i++ ) {

						handleObj = handlers[ i ];



						// Don't conflict with Object.prototype properties (#13203)

						sel = handleObj.selector + " ";



						if ( matchedSelectors[ sel ] === undefined ) {

							matchedSelectors[ sel ] = handleObj.needsContext ?

								jQuery( sel, this ).index( cur ) > -1 :

								jQuery.find( sel, this, null, [ cur ] ).length;

						}

						if ( matchedSelectors[ sel ] ) {

							matchedHandlers.push( handleObj );

						}

					}

					if ( matchedHandlers.length ) {

						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );

					}

				}

			}

		}



		// Add the remaining (directly-bound) handlers

		cur = this;

		if ( delegateCount < handlers.length ) {

			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );

		}



		return handlerQueue;

	},



	addProp: function( name, hook ) {

		Object.defineProperty( jQuery.Event.prototype, name, {

			enumerable: true,

			configurable: true,



			get: isFunction( hook ) ?

				function() {

					if ( this.originalEvent ) {

							return hook( this.originalEvent );

					}

				} :

				function() {

					if ( this.originalEvent ) {

							return this.originalEvent[ name ];

					}

				},



			set: function( value ) {

				Object.defineProperty( this, name, {

					enumerable: true,

					configurable: true,

					writable: true,

					value: value

				} );

			}

		} );

	},



	fix: function( originalEvent ) {

		return originalEvent[ jQuery.expando ] ?

			originalEvent :

			new jQuery.Event( originalEvent );

	},



	special: {

		load: {



			// Prevent triggered image.load events from bubbling to window.load

			noBubble: true

		},

		focus: {



			// Fire native event if possible so blur/focus sequence is correct

			trigger: function() {

				if ( this !== safeActiveElement() && this.focus ) {

					this.focus();

					return false;

				}

			},

			delegateType: "focusin"

		},

		blur: {

			trigger: function() {

				if ( this === safeActiveElement() && this.blur ) {

					this.blur();

					return false;

				}

			},

			delegateType: "focusout"

		},

		click: {



			// For checkbox, fire native event so checked state will be right

			trigger: function() {

				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {

					this.click();

					return false;

				}

			},



			// For cross-browser consistency, don't fire native .click() on links

			_default: function( event ) {

				return nodeName( event.target, "a" );

			}

		},



		beforeunload: {

			postDispatch: function( event ) {



				// Support: Firefox 20+

				// Firefox doesn't alert if the returnValue field is not set.

				if ( event.result !== undefined && event.originalEvent ) {

					event.originalEvent.returnValue = event.result;

				}

			}

		}

	}

};



jQuery.removeEvent = function( elem, type, handle ) {



	// This "if" is needed for plain objects

	if ( elem.removeEventListener ) {

		elem.removeEventListener( type, handle );

	}

};



jQuery.Event = function( src, props ) {



	// Allow instantiation without the 'new' keyword

	if ( !( this instanceof jQuery.Event ) ) {

		return new jQuery.Event( src, props );

	}



	// Event object

	if ( src && src.type ) {

		this.originalEvent = src;

		this.type = src.type;



		// Events bubbling up the document may have been marked as prevented

		// by a handler lower down the tree; reflect the correct value.

		this.isDefaultPrevented = src.defaultPrevented ||

				src.defaultPrevented === undefined &&



				// Support: Android <=2.3 only

				src.returnValue === false ?

			returnTrue :

			returnFalse;



		// Create target properties

		// Support: Safari <=6 - 7 only

		// Target should not be a text node (#504, #13143)

		this.target = ( src.target && src.target.nodeType === 3 ) ?

			src.target.parentNode :

			src.target;



		this.currentTarget = src.currentTarget;

		this.relatedTarget = src.relatedTarget;



	// Event type

	} else {

		this.type = src;

	}



	// Put explicitly provided properties onto the event object

	if ( props ) {

		jQuery.extend( this, props );

	}



	// Create a timestamp if incoming event doesn't have one

	this.timeStamp = src && src.timeStamp || Date.now();



	// Mark it as fixed

	this[ jQuery.expando ] = true;

};



// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding

// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html

jQuery.Event.prototype = {

	constructor: jQuery.Event,

	isDefaultPrevented: returnFalse,

	isPropagationStopped: returnFalse,

	isImmediatePropagationStopped: returnFalse,

	isSimulated: false,



	preventDefault: function() {

		var e = this.originalEvent;



		this.isDefaultPrevented = returnTrue;



		if ( e && !this.isSimulated ) {

			e.preventDefault();

		}

	},

	stopPropagation: function() {

		var e = this.originalEvent;



		this.isPropagationStopped = returnTrue;



		if ( e && !this.isSimulated ) {

			e.stopPropagation();

		}

	},

	stopImmediatePropagation: function() {

		var e = this.originalEvent;



		this.isImmediatePropagationStopped = returnTrue;



		if ( e && !this.isSimulated ) {

			e.stopImmediatePropagation();

		}



		this.stopPropagation();

	}

};



// Includes all common event props including KeyEvent and MouseEvent specific props

jQuery.each( {

	altKey: true,

	bubbles: true,

	cancelable: true,

	changedTouches: true,

	ctrlKey: true,

	detail: true,

	eventPhase: true,

	metaKey: true,

	pageX: true,

	pageY: true,

	shiftKey: true,

	view: true,

	"char": true,

	charCode: true,

	key: true,

	keyCode: true,

	button: true,

	buttons: true,

	clientX: true,

	clientY: true,

	offsetX: true,

	offsetY: true,

	pointerId: true,

	pointerType: true,

	screenX: true,

	screenY: true,

	targetTouches: true,

	toElement: true,

	touches: true,



	which: function( event ) {

		var button = event.button;



		// Add which for key events

		if ( event.which == null && rkeyEvent.test( event.type ) ) {

			return event.charCode != null ? event.charCode : event.keyCode;

		}



		// Add which for click: 1 === left; 2 === middle; 3 === right

		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {

			if ( button & 1 ) {

				return 1;

			}



			if ( button & 2 ) {

				return 3;

			}



			if ( button & 4 ) {

				return 2;

			}



			return 0;

		}



		return event.which;

	}

}, jQuery.event.addProp );



// Create mouseenter/leave events using mouseover/out and event-time checks

// so that event delegation works in jQuery.

// Do the same for pointerenter/pointerleave and pointerover/pointerout

//

// Support: Safari 7 only

// Safari sends mouseenter too often; see:

// https://bugs.chromium.org/p/chromium/issues/detail?id=470258

// for the description of the bug (it existed in older Chrome versions as well).

jQuery.each( {

	mouseenter: "mouseover",

	mouseleave: "mouseout",

	pointerenter: "pointerover",

	pointerleave: "pointerout"

}, function( orig, fix ) {

	jQuery.event.special[ orig ] = {

		delegateType: fix,

		bindType: fix,



		handle: function( event ) {

			var ret,

				target = this,

				related = event.relatedTarget,

				handleObj = event.handleObj;



			// For mouseenter/leave call the handler if related is outside the target.

			// NB: No relatedTarget if the mouse left/entered the browser window

			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {

				event.type = handleObj.origType;

				ret = handleObj.handler.apply( this, arguments );

				event.type = fix;

			}

			return ret;

		}

	};

} );



jQuery.fn.extend( {



	on: function( types, selector, data, fn ) {

		return on( this, types, selector, data, fn );

	},

	one: function( types, selector, data, fn ) {

		return on( this, types, selector, data, fn, 1 );

	},

	off: function( types, selector, fn ) {

		var handleObj, type;

		if ( types && types.preventDefault && types.handleObj ) {



			// ( event )  dispatched jQuery.Event

			handleObj = types.handleObj;

			jQuery( types.delegateTarget ).off(

				handleObj.namespace ?

					handleObj.origType + "." + handleObj.namespace :

					handleObj.origType,

				handleObj.selector,

				handleObj.handler

			);

			return this;

		}

		if ( typeof types === "object" ) {



			// ( types-object [, selector] )

			for ( type in types ) {

				this.off( type, selector, types[ type ] );

			}

			return this;

		}

		if ( selector === false || typeof selector === "function" ) {



			// ( types [, fn] )

			fn = selector;

			selector = undefined;

		}

		if ( fn === false ) {

			fn = returnFalse;

		}

		return this.each( function() {

			jQuery.event.remove( this, types, fn, selector );

		} );

	}

} );





var



	/* eslint-disable max-len */



	// See https://github.com/eslint/eslint/issues/3229

	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,



	/* eslint-enable */



	// Support: IE <=10 - 11, Edge 12 - 13 only

	// In IE/Edge using regex groups here causes severe slowdowns.

	// See https://connect.microsoft.com/IE/feedback/details/1736512/

	rnoInnerhtml = /<script|<style|<link/i,



	// checked="checked" or checked

	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;



// Prefer a tbody over its parent table for containing new rows

function manipulationTarget( elem, content ) {

	if ( nodeName( elem, "table" ) &&

		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {



		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;

	}



	return elem;

}



// Replace/restore the type attribute of script elements for safe DOM manipulation

function disableScript( elem ) {

	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;

	return elem;

}

function restoreScript( elem ) {

	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {

		elem.type = elem.type.slice( 5 );

	} else {

		elem.removeAttribute( "type" );

	}



	return elem;

}



function cloneCopyEvent( src, dest ) {

	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;



	if ( dest.nodeType !== 1 ) {

		return;

	}



	// 1. Copy private data: events, handlers, etc.

	if ( dataPriv.hasData( src ) ) {

		pdataOld = dataPriv.access( src );

		pdataCur = dataPriv.set( dest, pdataOld );

		events = pdataOld.events;



		if ( events ) {

			delete pdataCur.handle;

			pdataCur.events = {};



			for ( type in events ) {

				for ( i = 0, l = events[ type ].length; i < l; i++ ) {

					jQuery.event.add( dest, type, events[ type ][ i ] );

				}

			}

		}

	}



	// 2. Copy user data

	if ( dataUser.hasData( src ) ) {

		udataOld = dataUser.access( src );

		udataCur = jQuery.extend( {}, udataOld );



		dataUser.set( dest, udataCur );

	}

}



// Fix IE bugs, see support tests

function fixInput( src, dest ) {

	var nodeName = dest.nodeName.toLowerCase();



	// Fails to persist the checked state of a cloned checkbox or radio button.

	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {

		dest.checked = src.checked;



	// Fails to return the selected option to the default selected state when cloning options

	} else if ( nodeName === "input" || nodeName === "textarea" ) {

		dest.defaultValue = src.defaultValue;

	}

}



function domManip( collection, args, callback, ignored ) {



	// Flatten any nested arrays

	args = concat.apply( [], args );



	var fragment, first, scripts, hasScripts, node, doc,

		i = 0,

		l = collection.length,

		iNoClone = l - 1,

		value = args[ 0 ],

		valueIsFunction = isFunction( value );



	// We can't cloneNode fragments that contain checked, in WebKit

	if ( valueIsFunction ||

			( l > 1 && typeof value === "string" &&

				!support.checkClone && rchecked.test( value ) ) ) {

		return collection.each( function( index ) {

			var self = collection.eq( index );

			if ( valueIsFunction ) {

				args[ 0 ] = value.call( this, index, self.html() );

			}

			domManip( self, args, callback, ignored );

		} );

	}



	if ( l ) {

		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );

		first = fragment.firstChild;



		if ( fragment.childNodes.length === 1 ) {

			fragment = first;

		}



		// Require either new content or an interest in ignored elements to invoke the callback

		if ( first || ignored ) {

			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );

			hasScripts = scripts.length;



			// Use the original fragment for the last item

			// instead of the first because it can end up

			// being emptied incorrectly in certain situations (#8070).

			for ( ; i < l; i++ ) {

				node = fragment;



				if ( i !== iNoClone ) {

					node = jQuery.clone( node, true, true );



					// Keep references to cloned scripts for later restoration

					if ( hasScripts ) {



						// Support: Android <=4.0 only, PhantomJS 1 only

						// push.apply(_, arraylike) throws on ancient WebKit

						jQuery.merge( scripts, getAll( node, "script" ) );

					}

				}



				callback.call( collection[ i ], node, i );

			}



			if ( hasScripts ) {

				doc = scripts[ scripts.length - 1 ].ownerDocument;



				// Reenable scripts

				jQuery.map( scripts, restoreScript );



				// Evaluate executable scripts on first document insertion

				for ( i = 0; i < hasScripts; i++ ) {

					node = scripts[ i ];

					if ( rscriptType.test( node.type || "" ) &&

						!dataPriv.access( node, "globalEval" ) &&

						jQuery.contains( doc, node ) ) {



						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {



							// Optional AJAX dependency, but won't run scripts if not present

							if ( jQuery._evalUrl ) {

								jQuery._evalUrl( node.src );

							}

						} else {

							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );

						}

					}

				}

			}

		}

	}



	return collection;

}



function remove( elem, selector, keepData ) {

	var node,

		nodes = selector ? jQuery.filter( selector, elem ) : elem,

		i = 0;



	for ( ; ( node = nodes[ i ] ) != null; i++ ) {

		if ( !keepData && node.nodeType === 1 ) {

			jQuery.cleanData( getAll( node ) );

		}



		if ( node.parentNode ) {

			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {

				setGlobalEval( getAll( node, "script" ) );

			}

			node.parentNode.removeChild( node );

		}

	}



	return elem;

}



jQuery.extend( {

	htmlPrefilter: function( html ) {

		return html.replace( rxhtmlTag, "<$1></$2>" );

	},



	clone: function( elem, dataAndEvents, deepDataAndEvents ) {

		var i, l, srcElements, destElements,

			clone = elem.cloneNode( true ),

			inPage = jQuery.contains( elem.ownerDocument, elem );



		// Fix IE cloning issues

		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&

				!jQuery.isXMLDoc( elem ) ) {



			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2

			destElements = getAll( clone );

			srcElements = getAll( elem );



			for ( i = 0, l = srcElements.length; i < l; i++ ) {

				fixInput( srcElements[ i ], destElements[ i ] );

			}

		}



		// Copy the events from the original to the clone

		if ( dataAndEvents ) {

			if ( deepDataAndEvents ) {

				srcElements = srcElements || getAll( elem );

				destElements = destElements || getAll( clone );



				for ( i = 0, l = srcElements.length; i < l; i++ ) {

					cloneCopyEvent( srcElements[ i ], destElements[ i ] );

				}

			} else {

				cloneCopyEvent( elem, clone );

			}

		}



		// Preserve script evaluation history

		destElements = getAll( clone, "script" );

		if ( destElements.length > 0 ) {

			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );

		}



		// Return the cloned set

		return clone;

	},



	cleanData: function( elems ) {

		var data, elem, type,

			special = jQuery.event.special,

			i = 0;



		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {

			if ( acceptData( elem ) ) {

				if ( ( data = elem[ dataPriv.expando ] ) ) {

					if ( data.events ) {

						for ( type in data.events ) {

							if ( special[ type ] ) {

								jQuery.event.remove( elem, type );



							// This is a shortcut to avoid jQuery.event.remove's overhead

							} else {

								jQuery.removeEvent( elem, type, data.handle );

							}

						}

					}



					// Support: Chrome <=35 - 45+

					// Assign undefined instead of using delete, see Data#remove

					elem[ dataPriv.expando ] = undefined;

				}

				if ( elem[ dataUser.expando ] ) {



					// Support: Chrome <=35 - 45+

					// Assign undefined instead of using delete, see Data#remove

					elem[ dataUser.expando ] = undefined;

				}

			}

		}

	}

} );



jQuery.fn.extend( {

	detach: function( selector ) {

		return remove( this, selector, true );

	},



	remove: function( selector ) {

		return remove( this, selector );

	},



	text: function( value ) {

		return access( this, function( value ) {

			return value === undefined ?

				jQuery.text( this ) :

				this.empty().each( function() {

					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {

						this.textContent = value;

					}

				} );

		}, null, value, arguments.length );

	},



	append: function() {

		return domManip( this, arguments, function( elem ) {

			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {

				var target = manipulationTarget( this, elem );

				target.appendChild( elem );

			}

		} );

	},



	prepend: function() {

		return domManip( this, arguments, function( elem ) {

			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {

				var target = manipulationTarget( this, elem );

				target.insertBefore( elem, target.firstChild );

			}

		} );

	},



	before: function() {

		return domManip( this, arguments, function( elem ) {

			if ( this.parentNode ) {

				this.parentNode.insertBefore( elem, this );

			}

		} );

	},



	after: function() {

		return domManip( this, arguments, function( elem ) {

			if ( this.parentNode ) {

				this.parentNode.insertBefore( elem, this.nextSibling );

			}

		} );

	},



	empty: function() {

		var elem,

			i = 0;



		for ( ; ( elem = this[ i ] ) != null; i++ ) {

			if ( elem.nodeType === 1 ) {



				// Prevent memory leaks

				jQuery.cleanData( getAll( elem, false ) );



				// Remove any remaining nodes

				elem.textContent = "";

			}

		}



		return this;

	},



	clone: function( dataAndEvents, deepDataAndEvents ) {

		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;

		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;



		return this.map( function() {

			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );

		} );

	},



	html: function( value ) {

		return access( this, function( value ) {

			var elem = this[ 0 ] || {},

				i = 0,

				l = this.length;



			if ( value === undefined && elem.nodeType === 1 ) {

				return elem.innerHTML;

			}



			// See if we can take a shortcut and just use innerHTML

			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&

				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {



				value = jQuery.htmlPrefilter( value );



				try {

					for ( ; i < l; i++ ) {

						elem = this[ i ] || {};



						// Remove element nodes and prevent memory leaks

						if ( elem.nodeType === 1 ) {

							jQuery.cleanData( getAll( elem, false ) );

							elem.innerHTML = value;

						}

					}



					elem = 0;



				// If using innerHTML throws an exception, use the fallback method

				} catch ( e ) {}

			}



			if ( elem ) {

				this.empty().append( value );

			}

		}, null, value, arguments.length );

	},



	replaceWith: function() {

		var ignored = [];



		// Make the changes, replacing each non-ignored context element with the new content

		return domManip( this, arguments, function( elem ) {

			var parent = this.parentNode;



			if ( jQuery.inArray( this, ignored ) < 0 ) {

				jQuery.cleanData( getAll( this ) );

				if ( parent ) {

					parent.replaceChild( elem, this );

				}

			}



		// Force callback invocation

		}, ignored );

	}

} );



jQuery.each( {

	appendTo: "append",

	prependTo: "prepend",

	insertBefore: "before",

	insertAfter: "after",

	replaceAll: "replaceWith"

}, function( name, original ) {

	jQuery.fn[ name ] = function( selector ) {

		var elems,

			ret = [],

			insert = jQuery( selector ),

			last = insert.length - 1,

			i = 0;



		for ( ; i <= last; i++ ) {

			elems = i === last ? this : this.clone( true );

			jQuery( insert[ i ] )[ original ]( elems );



			// Support: Android <=4.0 only, PhantomJS 1 only

			// .get() because push.apply(_, arraylike) throws on ancient WebKit

			push.apply( ret, elems.get() );

		}



		return this.pushStack( ret );

	};

} );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );



var getStyles = function( elem ) {



		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)

		// IE throws on elements created in popups

		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"

		var view = elem.ownerDocument.defaultView;



		if ( !view || !view.opener ) {

			view = window;

		}



		return view.getComputedStyle( elem );

	};



var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );







( function() {



	// Executing both pixelPosition & boxSizingReliable tests require only one layout

	// so they're executed at the same time to save the second computation.

	function computeStyleTests() {



		// This is a singleton, we need to execute it only once

		if ( !div ) {

			return;

		}



		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +

			"margin-top:1px;padding:0;border:0";

		div.style.cssText =

			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +

			"margin:auto;border:1px;padding:1px;" +

			"width:60%;top:1%";

		documentElement.appendChild( container ).appendChild( div );



		var divStyle = window.getComputedStyle( div );

		pixelPositionVal = divStyle.top !== "1%";



		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;



		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3

		// Some styles come back with percentage values, even though they shouldn't

		div.style.right = "60%";

		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;



		// Support: IE 9 - 11 only

		// Detect misreporting of content dimensions for box-sizing:border-box elements

		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;



		// Support: IE 9 only

		// Detect overflow:scroll screwiness (gh-3699)

		div.style.position = "absolute";

		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";



		documentElement.removeChild( container );



		// Nullify the div so it wouldn't be stored in the memory and

		// it will also be a sign that checks already performed

		div = null;

	}



	function roundPixelMeasures( measure ) {

		return Math.round( parseFloat( measure ) );

	}



	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,

		reliableMarginLeftVal,

		container = document.createElement( "div" ),

		div = document.createElement( "div" );



	// Finish early in limited (non-browser) environments

	if ( !div.style ) {

		return;

	}



	// Support: IE <=9 - 11 only

	// Style of cloned element affects source element cloned (#8908)

	div.style.backgroundClip = "content-box";

	div.cloneNode( true ).style.backgroundClip = "";

	support.clearCloneStyle = div.style.backgroundClip === "content-box";



	jQuery.extend( support, {

		boxSizingReliable: function() {

			computeStyleTests();

			return boxSizingReliableVal;

		},

		pixelBoxStyles: function() {

			computeStyleTests();

			return pixelBoxStylesVal;

		},

		pixelPosition: function() {

			computeStyleTests();

			return pixelPositionVal;

		},

		reliableMarginLeft: function() {

			computeStyleTests();

			return reliableMarginLeftVal;

		},

		scrollboxSize: function() {

			computeStyleTests();

			return scrollboxSizeVal;

		}

	} );

} )();





function curCSS( elem, name, computed ) {

	var width, minWidth, maxWidth, ret,



		// Support: Firefox 51+

		// Retrieving style before computed somehow

		// fixes an issue with getting wrong values

		// on detached elements

		style = elem.style;



	computed = computed || getStyles( elem );



	// getPropertyValue is needed for:

	//   .css('filter') (IE 9 only, #12537)

	//   .css('--customProperty) (#3144)

	if ( computed ) {

		ret = computed.getPropertyValue( name ) || computed[ name ];



		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {

			ret = jQuery.style( elem, name );

		}



		// A tribute to the "awesome hack by Dean Edwards"

		// Android Browser returns percentage for some values,

		// but width seems to be reliably pixels.

		// This is against the CSSOM draft spec:

		// https://drafts.csswg.org/cssom/#resolved-values

		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {



			// Remember the original values

			width = style.width;

			minWidth = style.minWidth;

			maxWidth = style.maxWidth;



			// Put in the new values to get a computed value out

			style.minWidth = style.maxWidth = style.width = ret;

			ret = computed.width;



			// Revert the changed values

			style.width = width;

			style.minWidth = minWidth;

			style.maxWidth = maxWidth;

		}

	}



	return ret !== undefined ?



		// Support: IE <=9 - 11 only

		// IE returns zIndex value as an integer.

		ret + "" :

		ret;

}





function addGetHookIf( conditionFn, hookFn ) {



	// Define the hook, we'll check on the first run if it's really needed.

	return {

		get: function() {

			if ( conditionFn() ) {



				// Hook not needed (or it's not possible to use it due

				// to missing dependency), remove it.

				delete this.get;

				return;

			}



			// Hook needed; redefine it so that the support test is not executed again.

			return ( this.get = hookFn ).apply( this, arguments );

		}

	};

}





var



	// Swappable if display is none or starts with table

	// except "table", "table-cell", or "table-caption"

	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display

	rdisplayswap = /^(none|table(?!-c[ea]).+)/,

	rcustomProp = /^--/,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },

	cssNormalTransform = {

		letterSpacing: "0",

		fontWeight: "400"

	},



	cssPrefixes = [ "Webkit", "Moz", "ms" ],

	emptyStyle = document.createElement( "div" ).style;



// Return a css property mapped to a potentially vendor prefixed property

function vendorPropName( name ) {



	// Shortcut for names that are not vendor prefixed

	if ( name in emptyStyle ) {

		return name;

	}



	// Check for vendor prefixed names

	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),

		i = cssPrefixes.length;



	while ( i-- ) {

		name = cssPrefixes[ i ] + capName;

		if ( name in emptyStyle ) {

			return name;

		}

	}

}



// Return a property mapped along what jQuery.cssProps suggests or to

// a vendor prefixed property.

function finalPropName( name ) {

	var ret = jQuery.cssProps[ name ];

	if ( !ret ) {

		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;

	}

	return ret;

}



function setPositiveNumber( elem, value, subtract ) {



	// Any relative (+/-) values have already been

	// normalized at this point

	var matches = rcssNum.exec( value );

	return matches ?



		// Guard against undefined "subtract", e.g., when used as in cssHooks

		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :

		value;

}



function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {

	var i = dimension === "width" ? 1 : 0,

		extra = 0,

		delta = 0;



	// Adjustment may not be necessary

	if ( box === ( isBorderBox ? "border" : "content" ) ) {

		return 0;

	}



	for ( ; i < 4; i += 2 ) {



		// Both box models exclude margin

		if ( box === "margin" ) {

			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );

		}



		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"

		if ( !isBorderBox ) {



			// Add padding

			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );



			// For "border" or "margin", add border

			if ( box !== "padding" ) {

				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );



			// But still keep track of it otherwise

			} else {

				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			}



		// If we get here with a border-box (content + padding + border), we're seeking "content" or

		// "padding" or "margin"

		} else {



			// For "content", subtract padding

			if ( box === "content" ) {

				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			}



			// For "content" or "padding", subtract border

			if ( box !== "margin" ) {

				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			}

		}

	}



	// Account for positive content-box scroll gutter when requested by providing computedVal

	if ( !isBorderBox && computedVal >= 0 ) {



		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border

		// Assuming integer scroll gutter, subtract the rest and round down

		delta += Math.max( 0, Math.ceil(

			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -

			computedVal -

			delta -

			extra -

			0.5

		) );

	}



	return delta;

}



function getWidthOrHeight( elem, dimension, extra ) {



	// Start with computed style

	var styles = getStyles( elem ),

		val = curCSS( elem, dimension, styles ),

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",

		valueIsBorderBox = isBorderBox;



	// Support: Firefox <=54

	// Return a confounding non-pixel value or feign ignorance, as appropriate.

	if ( rnumnonpx.test( val ) ) {

		if ( !extra ) {

			return val;

		}

		val = "auto";

	}



	// Check for style in case a browser which returns unreliable values

	// for getComputedStyle silently falls back to the reliable elem.style

	valueIsBorderBox = valueIsBorderBox &&

		( support.boxSizingReliable() || val === elem.style[ dimension ] );



	// Fall back to offsetWidth/offsetHeight when value is "auto"

	// This happens for inline elements with no explicit setting (gh-3571)

	// Support: Android <=4.1 - 4.3 only

	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)

	if ( val === "auto" ||

		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {



		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];



		// offsetWidth/offsetHeight provide border-box values

		valueIsBorderBox = true;

	}



	// Normalize "" and auto

	val = parseFloat( val ) || 0;



	// Adjust for the element's box model

	return ( val +

		boxModelAdjustment(

			elem,

			dimension,

			extra || ( isBorderBox ? "border" : "content" ),

			valueIsBorderBox,

			styles,



			// Provide the current computed size to request scroll gutter calculation (gh-3589)

			val

		)

	) + "px";

}



jQuery.extend( {



	// Add in style property hooks for overriding the default

	// behavior of getting and setting a style property

	cssHooks: {

		opacity: {

			get: function( elem, computed ) {

				if ( computed ) {



					// We should always get a number back from opacity

					var ret = curCSS( elem, "opacity" );

					return ret === "" ? "1" : ret;

				}

			}

		}

	},



	// Don't automatically add "px" to these possibly-unitless properties

	cssNumber: {

		"animationIterationCount": true,

		"columnCount": true,

		"fillOpacity": true,

		"flexGrow": true,

		"flexShrink": true,

		"fontWeight": true,

		"lineHeight": true,

		"opacity": true,

		"order": true,

		"orphans": true,

		"widows": true,

		"zIndex": true,

		"zoom": true

	},



	// Add in properties whose names you wish to fix before

	// setting or getting the value

	cssProps: {},



	// Get and set the style property on a DOM Node

	style: function( elem, name, value, extra ) {



		// Don't set styles on text and comment nodes

		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {

			return;

		}



		// Make sure that we're working with the right name

		var ret, type, hooks,

			origName = camelCase( name ),

			isCustomProp = rcustomProp.test( name ),

			style = elem.style;



		// Make sure that we're working with the right name. We don't

		// want to query the value if it is a CSS custom property

		// since they are user-defined.

		if ( !isCustomProp ) {

			name = finalPropName( origName );

		}



		// Gets hook for the prefixed version, then unprefixed version

		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];



		// Check if we're setting a value

		if ( value !== undefined ) {

			type = typeof value;



			// Convert "+=" or "-=" to relative numbers (#7345)

			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {

				value = adjustCSS( elem, name, ret );



				// Fixes bug #9237

				type = "number";

			}



			// Make sure that null and NaN values aren't set (#7116)

			if ( value == null || value !== value ) {

				return;

			}



			// If a number was passed in, add the unit (except for certain CSS properties)

			if ( type === "number" ) {

				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );

			}



			// background-* props affect original clone's values

			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {

				style[ name ] = "inherit";

			}



			// If a hook was provided, use that value, otherwise just set the specified value

			if ( !hooks || !( "set" in hooks ) ||

				( value = hooks.set( elem, value, extra ) ) !== undefined ) {



				if ( isCustomProp ) {

					style.setProperty( name, value );

				} else {

					style[ name ] = value;

				}

			}



		} else {



			// If a hook was provided get the non-computed value from there

			if ( hooks && "get" in hooks &&

				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {



				return ret;

			}



			// Otherwise just get the value from the style object

			return style[ name ];

		}

	},



	css: function( elem, name, extra, styles ) {

		var val, num, hooks,

			origName = camelCase( name ),

			isCustomProp = rcustomProp.test( name );



		// Make sure that we're working with the right name. We don't

		// want to modify the value if it is a CSS custom property

		// since they are user-defined.

		if ( !isCustomProp ) {

			name = finalPropName( origName );

		}



		// Try prefixed name followed by the unprefixed name

		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];



		// If a hook was provided get the computed value from there

		if ( hooks && "get" in hooks ) {

			val = hooks.get( elem, true, extra );

		}



		// Otherwise, if a way to get the computed value exists, use that

		if ( val === undefined ) {

			val = curCSS( elem, name, styles );

		}



		// Convert "normal" to computed value

		if ( val === "normal" && name in cssNormalTransform ) {

			val = cssNormalTransform[ name ];

		}



		// Make numeric if forced or a qualifier was provided and val looks numeric

		if ( extra === "" || extra ) {

			num = parseFloat( val );

			return extra === true || isFinite( num ) ? num || 0 : val;

		}



		return val;

	}

} );



jQuery.each( [ "height", "width" ], function( i, dimension ) {

	jQuery.cssHooks[ dimension ] = {

		get: function( elem, computed, extra ) {

			if ( computed ) {



				// Certain elements can have dimension info if we invisibly show them

				// but it must have a current display style that would benefit

				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&



					// Support: Safari 8+

					// Table columns in Safari have non-zero offsetWidth & zero

					// getBoundingClientRect().width unless display is changed.

					// Support: IE <=11 only

					// Running getBoundingClientRect on a disconnected node

					// in IE throws an error.

					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?

						swap( elem, cssShow, function() {

							return getWidthOrHeight( elem, dimension, extra );

						} ) :

						getWidthOrHeight( elem, dimension, extra );

			}

		},



		set: function( elem, value, extra ) {

			var matches,

				styles = getStyles( elem ),

				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",

				subtract = extra && boxModelAdjustment(

					elem,

					dimension,

					extra,

					isBorderBox,

					styles

				);



			// Account for unreliable border-box dimensions by comparing offset* to computed and

			// faking a content-box to get border and padding (gh-3699)

			if ( isBorderBox && support.scrollboxSize() === styles.position ) {

				subtract -= Math.ceil(

					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -

					parseFloat( styles[ dimension ] ) -

					boxModelAdjustment( elem, dimension, "border", false, styles ) -

					0.5

				);

			}



			// Convert to pixels if value adjustment is needed

			if ( subtract && ( matches = rcssNum.exec( value ) ) &&

				( matches[ 3 ] || "px" ) !== "px" ) {



				elem.style[ dimension ] = value;

				value = jQuery.css( elem, dimension );

			}



			return setPositiveNumber( elem, value, subtract );

		}

	};

} );



jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,

	function( elem, computed ) {

		if ( computed ) {

			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||

				elem.getBoundingClientRect().left -

					swap( elem, { marginLeft: 0 }, function() {

						return elem.getBoundingClientRect().left;

					} )

				) + "px";

		}

	}

);



// These hooks are used by animate to expand properties

jQuery.each( {

	margin: "",

	padding: "",

	border: "Width"

}, function( prefix, suffix ) {

	jQuery.cssHooks[ prefix + suffix ] = {

		expand: function( value ) {

			var i = 0,

				expanded = {},



				// Assumes a single number if not a string

				parts = typeof value === "string" ? value.split( " " ) : [ value ];



			for ( ; i < 4; i++ ) {

				expanded[ prefix + cssExpand[ i ] + suffix ] =

					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];

			}



			return expanded;

		}

	};



	if ( prefix !== "margin" ) {

		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;

	}

} );



jQuery.fn.extend( {

	css: function( name, value ) {

		return access( this, function( elem, name, value ) {

			var styles, len,

				map = {},

				i = 0;



			if ( Array.isArray( name ) ) {

				styles = getStyles( elem );

				len = name.length;



				for ( ; i < len; i++ ) {

					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );

				}



				return map;

			}



			return value !== undefined ?

				jQuery.style( elem, name, value ) :

				jQuery.css( elem, name );

		}, name, value, arguments.length > 1 );

	}

} );





function Tween( elem, options, prop, end, easing ) {

	return new Tween.prototype.init( elem, options, prop, end, easing );

}

jQuery.Tween = Tween;



Tween.prototype = {

	constructor: Tween,

	init: function( elem, options, prop, end, easing, unit ) {

		this.elem = elem;

		this.prop = prop;

		this.easing = easing || jQuery.easing._default;

		this.options = options;

		this.start = this.now = this.cur();

		this.end = end;

		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );

	},

	cur: function() {

		var hooks = Tween.propHooks[ this.prop ];



		return hooks && hooks.get ?

			hooks.get( this ) :

			Tween.propHooks._default.get( this );

	},

	run: function( percent ) {

		var eased,

			hooks = Tween.propHooks[ this.prop ];



		if ( this.options.duration ) {

			this.pos = eased = jQuery.easing[ this.easing ](

				percent, this.options.duration * percent, 0, 1, this.options.duration

			);

		} else {

			this.pos = eased = percent;

		}

		this.now = ( this.end - this.start ) * eased + this.start;



		if ( this.options.step ) {

			this.options.step.call( this.elem, this.now, this );

		}



		if ( hooks && hooks.set ) {

			hooks.set( this );

		} else {

			Tween.propHooks._default.set( this );

		}

		return this;

	}

};



Tween.prototype.init.prototype = Tween.prototype;



Tween.propHooks = {

	_default: {

		get: function( tween ) {

			var result;



			// Use a property on the element directly when it is not a DOM element,

			// or when there is no matching style property that exists.

			if ( tween.elem.nodeType !== 1 ||

				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {

				return tween.elem[ tween.prop ];

			}



			// Passing an empty string as a 3rd parameter to .css will automatically

			// attempt a parseFloat and fallback to a string if the parse fails.

			// Simple values such as "10px" are parsed to Float;

			// complex values such as "rotate(1rad)" are returned as-is.

			result = jQuery.css( tween.elem, tween.prop, "" );



			// Empty strings, null, undefined and "auto" are converted to 0.

			return !result || result === "auto" ? 0 : result;

		},

		set: function( tween ) {



			// Use step hook for back compat.

			// Use cssHook if its there.

			// Use .style if available and use plain properties where available.

			if ( jQuery.fx.step[ tween.prop ] ) {

				jQuery.fx.step[ tween.prop ]( tween );

			} else if ( tween.elem.nodeType === 1 &&

				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||

					jQuery.cssHooks[ tween.prop ] ) ) {

				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );

			} else {

				tween.elem[ tween.prop ] = tween.now;

			}

		}

	}

};



// Support: IE <=9 only

// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {

	set: function( tween ) {

		if ( tween.elem.nodeType && tween.elem.parentNode ) {

			tween.elem[ tween.prop ] = tween.now;

		}

	}

};



jQuery.easing = {

	linear: function( p ) {

		return p;

	},

	swing: function( p ) {

		return 0.5 - Math.cos( p * Math.PI ) / 2;

	},

	_default: "swing"

};



jQuery.fx = Tween.prototype.init;



// Back compat <1.8 extension point

jQuery.fx.step = {};









var

	fxNow, inProgress,

	rfxtypes = /^(?:toggle|show|hide)$/,

	rrun = /queueHooks$/;



function schedule() {

	if ( inProgress ) {

		if ( document.hidden === false && window.requestAnimationFrame ) {

			window.requestAnimationFrame( schedule );

		} else {

			window.setTimeout( schedule, jQuery.fx.interval );

		}



		jQuery.fx.tick();

	}

}



// Animations created synchronously will run synchronously

function createFxNow() {

	window.setTimeout( function() {

		fxNow = undefined;

	} );

	return ( fxNow = Date.now() );

}



// Generate parameters to create a standard animation

function genFx( type, includeWidth ) {

	var which,

		i = 0,

		attrs = { height: type };



	// If we include width, step value is 1 to do all cssExpand values,

	// otherwise step value is 2 to skip over Left and Right

	includeWidth = includeWidth ? 1 : 0;

	for ( ; i < 4; i += 2 - includeWidth ) {

		which = cssExpand[ i ];

		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;

	}



	if ( includeWidth ) {

		attrs.opacity = attrs.width = type;

	}



	return attrs;

}



function createTween( value, prop, animation ) {

	var tween,

		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),

		index = 0,

		length = collection.length;

	for ( ; index < length; index++ ) {

		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {



			// We're done with this property

			return tween;

		}

	}

}



function defaultPrefilter( elem, props, opts ) {

	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,

		isBox = "width" in props || "height" in props,

		anim = this,

		orig = {},

		style = elem.style,

		hidden = elem.nodeType && isHiddenWithinTree( elem ),

		dataShow = dataPriv.get( elem, "fxshow" );



	// Queue-skipping animations hijack the fx hooks

	if ( !opts.queue ) {

		hooks = jQuery._queueHooks( elem, "fx" );

		if ( hooks.unqueued == null ) {

			hooks.unqueued = 0;

			oldfire = hooks.empty.fire;

			hooks.empty.fire = function() {

				if ( !hooks.unqueued ) {

					oldfire();

				}

			};

		}

		hooks.unqueued++;



		anim.always( function() {



			// Ensure the complete handler is called before this completes

			anim.always( function() {

				hooks.unqueued--;

				if ( !jQuery.queue( elem, "fx" ).length ) {

					hooks.empty.fire();

				}

			} );

		} );

	}



	// Detect show/hide animations

	for ( prop in props ) {

		value = props[ prop ];

		if ( rfxtypes.test( value ) ) {

			delete props[ prop ];

			toggle = toggle || value === "toggle";

			if ( value === ( hidden ? "hide" : "show" ) ) {



				// Pretend to be hidden if this is a "show" and

				// there is still data from a stopped show/hide

				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {

					hidden = true;



				// Ignore all other no-op show/hide data

				} else {

					continue;

				}

			}

			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		}

	}



	// Bail out if this is a no-op like .hide().hide()

	propTween = !jQuery.isEmptyObject( props );

	if ( !propTween && jQuery.isEmptyObject( orig ) ) {

		return;

	}



	// Restrict "overflow" and "display" styles during box animations

	if ( isBox && elem.nodeType === 1 ) {



		// Support: IE <=9 - 11, Edge 12 - 15

		// Record all 3 overflow attributes because IE does not infer the shorthand

		// from identically-valued overflowX and overflowY and Edge just mirrors

		// the overflowX value there.

		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];



		// Identify a display type, preferring old show/hide data over the CSS cascade

		restoreDisplay = dataShow && dataShow.display;

		if ( restoreDisplay == null ) {

			restoreDisplay = dataPriv.get( elem, "display" );

		}

		display = jQuery.css( elem, "display" );

		if ( display === "none" ) {

			if ( restoreDisplay ) {

				display = restoreDisplay;

			} else {



				// Get nonempty value(s) by temporarily forcing visibility

				showHide( [ elem ], true );

				restoreDisplay = elem.style.display || restoreDisplay;

				display = jQuery.css( elem, "display" );

				showHide( [ elem ] );

			}

		}



		// Animate inline elements as inline-block

		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {

			if ( jQuery.css( elem, "float" ) === "none" ) {



				// Restore the original display value at the end of pure show/hide animations

				if ( !propTween ) {

					anim.done( function() {

						style.display = restoreDisplay;

					} );

					if ( restoreDisplay == null ) {

						display = style.display;

						restoreDisplay = display === "none" ? "" : display;

					}

				}

				style.display = "inline-block";

			}

		}

	}



	if ( opts.overflow ) {

		style.overflow = "hidden";

		anim.always( function() {

			style.overflow = opts.overflow[ 0 ];

			style.overflowX = opts.overflow[ 1 ];

			style.overflowY = opts.overflow[ 2 ];

		} );

	}



	// Implement show/hide animations

	propTween = false;

	for ( prop in orig ) {



		// General show/hide setup for this element animation

		if ( !propTween ) {

			if ( dataShow ) {

				if ( "hidden" in dataShow ) {

					hidden = dataShow.hidden;

				}

			} else {

				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );

			}



			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"

			if ( toggle ) {

				dataShow.hidden = !hidden;

			}



			// Show elements before animating them

			if ( hidden ) {

				showHide( [ elem ], true );

			}



			/* eslint-disable no-loop-func */



			anim.done( function() {



			/* eslint-enable no-loop-func */



				// The final step of a "hide" animation is actually hiding the element

				if ( !hidden ) {

					showHide( [ elem ] );

				}

				dataPriv.remove( elem, "fxshow" );

				for ( prop in orig ) {

					jQuery.style( elem, prop, orig[ prop ] );

				}

			} );

		}



		// Per-property setup

		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

		if ( !( prop in dataShow ) ) {

			dataShow[ prop ] = propTween.start;

			if ( hidden ) {

				propTween.end = propTween.start;

				propTween.start = 0;

			}

		}

	}

}



function propFilter( props, specialEasing ) {

	var index, name, easing, value, hooks;



	// camelCase, specialEasing and expand cssHook pass

	for ( index in props ) {

		name = camelCase( index );

		easing = specialEasing[ name ];

		value = props[ index ];

		if ( Array.isArray( value ) ) {

			easing = value[ 1 ];

			value = props[ index ] = value[ 0 ];

		}



		if ( index !== name ) {

			props[ name ] = value;

			delete props[ index ];

		}



		hooks = jQuery.cssHooks[ name ];

		if ( hooks && "expand" in hooks ) {

			value = hooks.expand( value );

			delete props[ name ];



			// Not quite $.extend, this won't overwrite existing keys.

			// Reusing 'index' because we have the correct "name"

			for ( index in value ) {

				if ( !( index in props ) ) {

					props[ index ] = value[ index ];

					specialEasing[ index ] = easing;

				}

			}

		} else {

			specialEasing[ name ] = easing;

		}

	}

}



function Animation( elem, properties, options ) {

	var result,

		stopped,

		index = 0,

		length = Animation.prefilters.length,

		deferred = jQuery.Deferred().always( function() {



			// Don't match elem in the :animated selector

			delete tick.elem;

		} ),

		tick = function() {

			if ( stopped ) {

				return false;

			}

			var currentTime = fxNow || createFxNow(),

				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),



				// Support: Android 2.3 only

				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)

				temp = remaining / animation.duration || 0,

				percent = 1 - temp,

				index = 0,

				length = animation.tweens.length;



			for ( ; index < length; index++ ) {

				animation.tweens[ index ].run( percent );

			}



			deferred.notifyWith( elem, [ animation, percent, remaining ] );



			// If there's more to do, yield

			if ( percent < 1 && length ) {

				return remaining;

			}



			// If this was an empty animation, synthesize a final progress notification

			if ( !length ) {

				deferred.notifyWith( elem, [ animation, 1, 0 ] );

			}



			// Resolve the animation and report its conclusion

			deferred.resolveWith( elem, [ animation ] );

			return false;

		},

		animation = deferred.promise( {

			elem: elem,

			props: jQuery.extend( {}, properties ),

			opts: jQuery.extend( true, {

				specialEasing: {},

				easing: jQuery.easing._default

			}, options ),

			originalProperties: properties,

			originalOptions: options,

			startTime: fxNow || createFxNow(),

			duration: options.duration,

			tweens: [],

			createTween: function( prop, end ) {

				var tween = jQuery.Tween( elem, animation.opts, prop, end,

						animation.opts.specialEasing[ prop ] || animation.opts.easing );

				animation.tweens.push( tween );

				return tween;

			},

			stop: function( gotoEnd ) {

				var index = 0,



					// If we are going to the end, we want to run all the tweens

					// otherwise we skip this part

					length = gotoEnd ? animation.tweens.length : 0;

				if ( stopped ) {

					return this;

				}

				stopped = true;

				for ( ; index < length; index++ ) {

					animation.tweens[ index ].run( 1 );

				}



				// Resolve when we played the last frame; otherwise, reject

				if ( gotoEnd ) {

					deferred.notifyWith( elem, [ animation, 1, 0 ] );

					deferred.resolveWith( elem, [ animation, gotoEnd ] );

				} else {

					deferred.rejectWith( elem, [ animation, gotoEnd ] );

				}

				return this;

			}

		} ),

		props = animation.props;



	propFilter( props, animation.opts.specialEasing );



	for ( ; index < length; index++ ) {

		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );

		if ( result ) {

			if ( isFunction( result.stop ) ) {

				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =

					result.stop.bind( result );

			}

			return result;

		}

	}



	jQuery.map( props, createTween, animation );



	if ( isFunction( animation.opts.start ) ) {

		animation.opts.start.call( elem, animation );

	}



	// Attach callbacks from options

	animation

		.progress( animation.opts.progress )

		.done( animation.opts.done, animation.opts.complete )

		.fail( animation.opts.fail )

		.always( animation.opts.always );



	jQuery.fx.timer(

		jQuery.extend( tick, {

			elem: elem,

			anim: animation,

			queue: animation.opts.queue

		} )

	);



	return animation;

}



jQuery.Animation = jQuery.extend( Animation, {



	tweeners: {

		"*": [ function( prop, value ) {

			var tween = this.createTween( prop, value );

			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );

			return tween;

		} ]

	},



	tweener: function( props, callback ) {

		if ( isFunction( props ) ) {

			callback = props;

			props = [ "*" ];

		} else {

			props = props.match( rnothtmlwhite );

		}



		var prop,

			index = 0,

			length = props.length;



		for ( ; index < length; index++ ) {

			prop = props[ index ];

			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];

			Animation.tweeners[ prop ].unshift( callback );

		}

	},



	prefilters: [ defaultPrefilter ],



	prefilter: function( callback, prepend ) {

		if ( prepend ) {

			Animation.prefilters.unshift( callback );

		} else {

			Animation.prefilters.push( callback );

		}

	}

} );



jQuery.speed = function( speed, easing, fn ) {

	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {

		complete: fn || !fn && easing ||

			isFunction( speed ) && speed,

		duration: speed,

		easing: fn && easing || easing && !isFunction( easing ) && easing

	};



	// Go to the end state if fx are off

	if ( jQuery.fx.off ) {

		opt.duration = 0;



	} else {

		if ( typeof opt.duration !== "number" ) {

			if ( opt.duration in jQuery.fx.speeds ) {

				opt.duration = jQuery.fx.speeds[ opt.duration ];



			} else {

				opt.duration = jQuery.fx.speeds._default;

			}

		}

	}



	// Normalize opt.queue - true/undefined/null -> "fx"

	if ( opt.queue == null || opt.queue === true ) {

		opt.queue = "fx";

	}



	// Queueing

	opt.old = opt.complete;



	opt.complete = function() {

		if ( isFunction( opt.old ) ) {

			opt.old.call( this );

		}



		if ( opt.queue ) {

			jQuery.dequeue( this, opt.queue );

		}

	};



	return opt;

};



jQuery.fn.extend( {

	fadeTo: function( speed, to, easing, callback ) {



		// Show any hidden elements after setting opacity to 0

		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()



			// Animate to the value specified

			.end().animate( { opacity: to }, speed, easing, callback );

	},

	animate: function( prop, speed, easing, callback ) {

		var empty = jQuery.isEmptyObject( prop ),

			optall = jQuery.speed( speed, easing, callback ),

			doAnimation = function() {



				// Operate on a copy of prop so per-property easing won't be lost

				var anim = Animation( this, jQuery.extend( {}, prop ), optall );



				// Empty animations, or finishing resolves immediately

				if ( empty || dataPriv.get( this, "finish" ) ) {

					anim.stop( true );

				}

			};

			doAnimation.finish = doAnimation;



		return empty || optall.queue === false ?

			this.each( doAnimation ) :

			this.queue( optall.queue, doAnimation );

	},

	stop: function( type, clearQueue, gotoEnd ) {

		var stopQueue = function( hooks ) {

			var stop = hooks.stop;

			delete hooks.stop;

			stop( gotoEnd );

		};



		if ( typeof type !== "string" ) {

			gotoEnd = clearQueue;

			clearQueue = type;

			type = undefined;

		}

		if ( clearQueue && type !== false ) {

			this.queue( type || "fx", [] );

		}



		return this.each( function() {

			var dequeue = true,

				index = type != null && type + "queueHooks",

				timers = jQuery.timers,

				data = dataPriv.get( this );



			if ( index ) {

				if ( data[ index ] && data[ index ].stop ) {

					stopQueue( data[ index ] );

				}

			} else {

				for ( index in data ) {

					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {

						stopQueue( data[ index ] );

					}

				}

			}



			for ( index = timers.length; index--; ) {

				if ( timers[ index ].elem === this &&

					( type == null || timers[ index ].queue === type ) ) {



					timers[ index ].anim.stop( gotoEnd );

					dequeue = false;

					timers.splice( index, 1 );

				}

			}



			// Start the next in the queue if the last step wasn't forced.

			// Timers currently will call their complete callbacks, which

			// will dequeue but only if they were gotoEnd.

			if ( dequeue || !gotoEnd ) {

				jQuery.dequeue( this, type );

			}

		} );

	},

	finish: function( type ) {

		if ( type !== false ) {

			type = type || "fx";

		}

		return this.each( function() {

			var index,

				data = dataPriv.get( this ),

				queue = data[ type + "queue" ],

				hooks = data[ type + "queueHooks" ],

				timers = jQuery.timers,

				length = queue ? queue.length : 0;



			// Enable finishing flag on private data

			data.finish = true;



			// Empty the queue first

			jQuery.queue( this, type, [] );



			if ( hooks && hooks.stop ) {

				hooks.stop.call( this, true );

			}



			// Look for any active animations, and finish them

			for ( index = timers.length; index--; ) {

				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {

					timers[ index ].anim.stop( true );

					timers.splice( index, 1 );

				}

			}



			// Look for any animations in the old queue and finish them

			for ( index = 0; index < length; index++ ) {

				if ( queue[ index ] && queue[ index ].finish ) {

					queue[ index ].finish.call( this );

				}

			}



			// Turn off finishing flag

			delete data.finish;

		} );

	}

} );



jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {

	var cssFn = jQuery.fn[ name ];

	jQuery.fn[ name ] = function( speed, easing, callback ) {

		return speed == null || typeof speed === "boolean" ?

			cssFn.apply( this, arguments ) :

			this.animate( genFx( name, true ), speed, easing, callback );

	};

} );



// Generate shortcuts for custom animations

jQuery.each( {

	slideDown: genFx( "show" ),

	slideUp: genFx( "hide" ),

	slideToggle: genFx( "toggle" ),

	fadeIn: { opacity: "show" },

	fadeOut: { opacity: "hide" },

	fadeToggle: { opacity: "toggle" }

}, function( name, props ) {

	jQuery.fn[ name ] = function( speed, easing, callback ) {

		return this.animate( props, speed, easing, callback );

	};

} );



jQuery.timers = [];

jQuery.fx.tick = function() {

	var timer,

		i = 0,

		timers = jQuery.timers;



	fxNow = Date.now();



	for ( ; i < timers.length; i++ ) {

		timer = timers[ i ];



		// Run the timer and safely remove it when done (allowing for external removal)

		if ( !timer() && timers[ i ] === timer ) {

			timers.splice( i--, 1 );

		}

	}



	if ( !timers.length ) {

		jQuery.fx.stop();

	}

	fxNow = undefined;

};



jQuery.fx.timer = function( timer ) {

	jQuery.timers.push( timer );

	jQuery.fx.start();

};



jQuery.fx.interval = 13;

jQuery.fx.start = function() {

	if ( inProgress ) {

		return;

	}



	inProgress = true;

	schedule();

};



jQuery.fx.stop = function() {

	inProgress = null;

};



jQuery.fx.speeds = {

	slow: 600,

	fast: 200,



	// Default speed

	_default: 400

};





// Based off of the plugin by Clint Helfers, with permission.

// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

jQuery.fn.delay = function( time, type ) {

	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;

	type = type || "fx";



	return this.queue( type, function( next, hooks ) {

		var timeout = window.setTimeout( next, time );

		hooks.stop = function() {

			window.clearTimeout( timeout );

		};

	} );

};





( function() {

	var input = document.createElement( "input" ),

		select = document.createElement( "select" ),

		opt = select.appendChild( document.createElement( "option" ) );



	input.type = "checkbox";



	// Support: Android <=4.3 only

	// Default value for a checkbox should be "on"

	support.checkOn = input.value !== "";



	// Support: IE <=11 only

	// Must access selectedIndex to make default options select

	support.optSelected = opt.selected;



	// Support: IE <=11 only

	// An input loses its value after becoming a radio

	input = document.createElement( "input" );

	input.value = "t";

	input.type = "radio";

	support.radioValue = input.value === "t";

} )();





var boolHook,

	attrHandle = jQuery.expr.attrHandle;



jQuery.fn.extend( {

	attr: function( name, value ) {

		return access( this, jQuery.attr, name, value, arguments.length > 1 );

	},



	removeAttr: function( name ) {

		return this.each( function() {

			jQuery.removeAttr( this, name );

		} );

	}

} );



jQuery.extend( {

	attr: function( elem, name, value ) {

		var ret, hooks,

			nType = elem.nodeType;



		// Don't get/set attributes on text, comment and attribute nodes

		if ( nType === 3 || nType === 8 || nType === 2 ) {

			return;

		}



		// Fallback to prop when attributes are not supported

		if ( typeof elem.getAttribute === "undefined" ) {

			return jQuery.prop( elem, name, value );

		}



		// Attribute hooks are determined by the lowercase version

		// Grab necessary hook if one is defined

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||

				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );

		}



		if ( value !== undefined ) {

			if ( value === null ) {

				jQuery.removeAttr( elem, name );

				return;

			}



			if ( hooks && "set" in hooks &&

				( ret = hooks.set( elem, value, name ) ) !== undefined ) {

				return ret;

			}



			elem.setAttribute( name, value + "" );

			return value;

		}



		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {

			return ret;

		}



		ret = jQuery.find.attr( elem, name );



		// Non-existent attributes return null, we normalize to undefined

		return ret == null ? undefined : ret;

	},



	attrHooks: {

		type: {

			set: function( elem, value ) {

				if ( !support.radioValue && value === "radio" &&

					nodeName( elem, "input" ) ) {

					var val = elem.value;

					elem.setAttribute( "type", value );

					if ( val ) {

						elem.value = val;

					}

					return value;

				}

			}

		}

	},



	removeAttr: function( elem, value ) {

		var name,

			i = 0,



			// Attribute names can contain non-HTML whitespace characters

			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2

			attrNames = value && value.match( rnothtmlwhite );



		if ( attrNames && elem.nodeType === 1 ) {

			while ( ( name = attrNames[ i++ ] ) ) {

				elem.removeAttribute( name );

			}

		}

	}

} );



// Hooks for boolean attributes

boolHook = {

	set: function( elem, value, name ) {

		if ( value === false ) {



			// Remove boolean attributes when set to false

			jQuery.removeAttr( elem, name );

		} else {

			elem.setAttribute( name, name );

		}

		return name;

	}

};



jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {

	var getter = attrHandle[ name ] || jQuery.find.attr;



	attrHandle[ name ] = function( elem, name, isXML ) {

		var ret, handle,

			lowercaseName = name.toLowerCase();



		if ( !isXML ) {



			// Avoid an infinite loop by temporarily removing this function from the getter

			handle = attrHandle[ lowercaseName ];

			attrHandle[ lowercaseName ] = ret;

			ret = getter( elem, name, isXML ) != null ?

				lowercaseName :

				null;

			attrHandle[ lowercaseName ] = handle;

		}

		return ret;

	};

} );









var rfocusable = /^(?:input|select|textarea|button)$/i,

	rclickable = /^(?:a|area)$/i;



jQuery.fn.extend( {

	prop: function( name, value ) {

		return access( this, jQuery.prop, name, value, arguments.length > 1 );

	},



	removeProp: function( name ) {

		return this.each( function() {

			delete this[ jQuery.propFix[ name ] || name ];

		} );

	}

} );



jQuery.extend( {

	prop: function( elem, name, value ) {

		var ret, hooks,

			nType = elem.nodeType;



		// Don't get/set properties on text, comment and attribute nodes

		if ( nType === 3 || nType === 8 || nType === 2 ) {

			return;

		}



		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {



			// Fix name and attach hooks

			name = jQuery.propFix[ name ] || name;

			hooks = jQuery.propHooks[ name ];

		}



		if ( value !== undefined ) {

			if ( hooks && "set" in hooks &&

				( ret = hooks.set( elem, value, name ) ) !== undefined ) {

				return ret;

			}



			return ( elem[ name ] = value );

		}



		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {

			return ret;

		}



		return elem[ name ];

	},



	propHooks: {

		tabIndex: {

			get: function( elem ) {



				// Support: IE <=9 - 11 only

				// elem.tabIndex doesn't always return the

				// correct value when it hasn't been explicitly set

				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/

				// Use proper attribute retrieval(#12072)

				var tabindex = jQuery.find.attr( elem, "tabindex" );



				if ( tabindex ) {

					return parseInt( tabindex, 10 );

				}



				if (

					rfocusable.test( elem.nodeName ) ||

					rclickable.test( elem.nodeName ) &&

					elem.href

				) {

					return 0;

				}



				return -1;

			}

		}

	},



	propFix: {

		"for": "htmlFor",

		"class": "className"

	}

} );



// Support: IE <=11 only

// Accessing the selectedIndex property

// forces the browser to respect setting selected

// on the option

// The getter ensures a default option is selected

// when in an optgroup

// eslint rule "no-unused-expressions" is disabled for this code

// since it considers such accessions noop

if ( !support.optSelected ) {

	jQuery.propHooks.selected = {

		get: function( elem ) {



			/* eslint no-unused-expressions: "off" */



			var parent = elem.parentNode;

			if ( parent && parent.parentNode ) {

				parent.parentNode.selectedIndex;

			}

			return null;

		},

		set: function( elem ) {



			/* eslint no-unused-expressions: "off" */



			var parent = elem.parentNode;

			if ( parent ) {

				parent.selectedIndex;



				if ( parent.parentNode ) {

					parent.parentNode.selectedIndex;

				}

			}

		}

	};

}



jQuery.each( [

	"tabIndex",

	"readOnly",

	"maxLength",

	"cellSpacing",

	"cellPadding",

	"rowSpan",

	"colSpan",

	"useMap",

	"frameBorder",

	"contentEditable"

], function() {

	jQuery.propFix[ this.toLowerCase() ] = this;

} );









	// Strip and collapse whitespace according to HTML spec

	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

	function stripAndCollapse( value ) {

		var tokens = value.match( rnothtmlwhite ) || [];

		return tokens.join( " " );

	}





function getClass( elem ) {

	return elem.getAttribute && elem.getAttribute( "class" ) || "";

}



function classesToArray( value ) {

	if ( Array.isArray( value ) ) {

		return value;

	}

	if ( typeof value === "string" ) {

		return value.match( rnothtmlwhite ) || [];

	}

	return [];

}



jQuery.fn.extend( {

	addClass: function( value ) {

		var classes, elem, cur, curValue, clazz, j, finalValue,

			i = 0;



		if ( isFunction( value ) ) {

			return this.each( function( j ) {

				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );

			} );

		}



		classes = classesToArray( value );



		if ( classes.length ) {

			while ( ( elem = this[ i++ ] ) ) {

				curValue = getClass( elem );

				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );



				if ( cur ) {

					j = 0;

					while ( ( clazz = classes[ j++ ] ) ) {

						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {

							cur += clazz + " ";

						}

					}



					// Only assign if different to avoid unneeded rendering.

					finalValue = stripAndCollapse( cur );

					if ( curValue !== finalValue ) {

						elem.setAttribute( "class", finalValue );

					}

				}

			}

		}



		return this;

	},



	removeClass: function( value ) {

		var classes, elem, cur, curValue, clazz, j, finalValue,

			i = 0;



		if ( isFunction( value ) ) {

			return this.each( function( j ) {

				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );

			} );

		}



		if ( !arguments.length ) {

			return this.attr( "class", "" );

		}



		classes = classesToArray( value );



		if ( classes.length ) {

			while ( ( elem = this[ i++ ] ) ) {

				curValue = getClass( elem );



				// This expression is here for better compressibility (see addClass)

				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );



				if ( cur ) {

					j = 0;

					while ( ( clazz = classes[ j++ ] ) ) {



						// Remove *all* instances

						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {

							cur = cur.replace( " " + clazz + " ", " " );

						}

					}



					// Only assign if different to avoid unneeded rendering.

					finalValue = stripAndCollapse( cur );

					if ( curValue !== finalValue ) {

						elem.setAttribute( "class", finalValue );

					}

				}

			}

		}



		return this;

	},



	toggleClass: function( value, stateVal ) {

		var type = typeof value,

			isValidValue = type === "string" || Array.isArray( value );



		if ( typeof stateVal === "boolean" && isValidValue ) {

			return stateVal ? this.addClass( value ) : this.removeClass( value );

		}



		if ( isFunction( value ) ) {

			return this.each( function( i ) {

				jQuery( this ).toggleClass(

					value.call( this, i, getClass( this ), stateVal ),

					stateVal

				);

			} );

		}



		return this.each( function() {

			var className, i, self, classNames;



			if ( isValidValue ) {



				// Toggle individual class names

				i = 0;

				self = jQuery( this );

				classNames = classesToArray( value );



				while ( ( className = classNames[ i++ ] ) ) {



					// Check each className given, space separated list

					if ( self.hasClass( className ) ) {

						self.removeClass( className );

					} else {

						self.addClass( className );

					}

				}



			// Toggle whole class name

			} else if ( value === undefined || type === "boolean" ) {

				className = getClass( this );

				if ( className ) {



					// Store className if set

					dataPriv.set( this, "__className__", className );

				}



				// If the element has a class name or if we're passed `false`,

				// then remove the whole classname (if there was one, the above saved it).

				// Otherwise bring back whatever was previously saved (if anything),

				// falling back to the empty string if nothing was stored.

				if ( this.setAttribute ) {

					this.setAttribute( "class",

						className || value === false ?

						"" :

						dataPriv.get( this, "__className__" ) || ""

					);

				}

			}

		} );

	},



	hasClass: function( selector ) {

		var className, elem,

			i = 0;



		className = " " + selector + " ";

		while ( ( elem = this[ i++ ] ) ) {

			if ( elem.nodeType === 1 &&

				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {

					return true;

			}

		}



		return false;

	}

} );









var rreturn = /\r/g;



jQuery.fn.extend( {

	val: function( value ) {

		var hooks, ret, valueIsFunction,

			elem = this[ 0 ];



		if ( !arguments.length ) {

			if ( elem ) {

				hooks = jQuery.valHooks[ elem.type ] ||

					jQuery.valHooks[ elem.nodeName.toLowerCase() ];



				if ( hooks &&

					"get" in hooks &&

					( ret = hooks.get( elem, "value" ) ) !== undefined

				) {

					return ret;

				}



				ret = elem.value;



				// Handle most common string cases

				if ( typeof ret === "string" ) {

					return ret.replace( rreturn, "" );

				}



				// Handle cases where value is null/undef or number

				return ret == null ? "" : ret;

			}



			return;

		}



		valueIsFunction = isFunction( value );



		return this.each( function( i ) {

			var val;



			if ( this.nodeType !== 1 ) {

				return;

			}



			if ( valueIsFunction ) {

				val = value.call( this, i, jQuery( this ).val() );

			} else {

				val = value;

			}



			// Treat null/undefined as ""; convert numbers to string

			if ( val == null ) {

				val = "";



			} else if ( typeof val === "number" ) {

				val += "";



			} else if ( Array.isArray( val ) ) {

				val = jQuery.map( val, function( value ) {

					return value == null ? "" : value + "";

				} );

			}



			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];



			// If set returns undefined, fall back to normal setting

			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {

				this.value = val;

			}

		} );

	}

} );



jQuery.extend( {

	valHooks: {

		option: {

			get: function( elem ) {



				var val = jQuery.find.attr( elem, "value" );

				return val != null ?

					val :



					// Support: IE <=10 - 11 only

					// option.text throws exceptions (#14686, #14858)

					// Strip and collapse whitespace

					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace

					stripAndCollapse( jQuery.text( elem ) );

			}

		},

		select: {

			get: function( elem ) {

				var value, option, i,

					options = elem.options,

					index = elem.selectedIndex,

					one = elem.type === "select-one",

					values = one ? null : [],

					max = one ? index + 1 : options.length;



				if ( index < 0 ) {

					i = max;



				} else {

					i = one ? index : 0;

				}



				// Loop through all the selected options

				for ( ; i < max; i++ ) {

					option = options[ i ];



					// Support: IE <=9 only

					// IE8-9 doesn't update selected after form reset (#2551)

					if ( ( option.selected || i === index ) &&



							// Don't return options that are disabled or in a disabled optgroup

							!option.disabled &&

							( !option.parentNode.disabled ||

								!nodeName( option.parentNode, "optgroup" ) ) ) {



						// Get the specific value for the option

						value = jQuery( option ).val();



						// We don't need an array for one selects

						if ( one ) {

							return value;

						}



						// Multi-Selects return an array

						values.push( value );

					}

				}



				return values;

			},



			set: function( elem, value ) {

				var optionSet, option,

					options = elem.options,

					values = jQuery.makeArray( value ),

					i = options.length;



				while ( i-- ) {

					option = options[ i ];



					/* eslint-disable no-cond-assign */



					if ( option.selected =

						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1

					) {

						optionSet = true;

					}



					/* eslint-enable no-cond-assign */

				}



				// Force browsers to behave consistently when non-matching value is set

				if ( !optionSet ) {

					elem.selectedIndex = -1;

				}

				return values;

			}

		}

	}

} );



// Radios and checkboxes getter/setter

jQuery.each( [ "radio", "checkbox" ], function() {

	jQuery.valHooks[ this ] = {

		set: function( elem, value ) {

			if ( Array.isArray( value ) ) {

				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );

			}

		}

	};

	if ( !support.checkOn ) {

		jQuery.valHooks[ this ].get = function( elem ) {

			return elem.getAttribute( "value" ) === null ? "on" : elem.value;

		};

	}

} );









// Return jQuery for attributes-only inclusion





support.focusin = "onfocusin" in window;





var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,

	stopPropagationCallback = function( e ) {

		e.stopPropagation();

	};



jQuery.extend( jQuery.event, {



	trigger: function( event, data, elem, onlyHandlers ) {



		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,

			eventPath = [ elem || document ],

			type = hasOwn.call( event, "type" ) ? event.type : event,

			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];



		cur = lastElement = tmp = elem = elem || document;



		// Don't do events on text and comment nodes

		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {

			return;

		}



		// focus/blur morphs to focusin/out; ensure we're not firing them right now

		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {

			return;

		}



		if ( type.indexOf( "." ) > -1 ) {



			// Namespaced trigger; create a regexp to match event type in handle()

			namespaces = type.split( "." );

			type = namespaces.shift();

			namespaces.sort();

		}

		ontype = type.indexOf( ":" ) < 0 && "on" + type;



		// Caller can pass in a jQuery.Event object, Object, or just an event type string

		event = event[ jQuery.expando ] ?

			event :

			new jQuery.Event( type, typeof event === "object" && event );



		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

		event.isTrigger = onlyHandlers ? 2 : 3;

		event.namespace = namespaces.join( "." );

		event.rnamespace = event.namespace ?

			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :

			null;



		// Clean up the event in case it is being reused

		event.result = undefined;

		if ( !event.target ) {

			event.target = elem;

		}



		// Clone any incoming data and prepend the event, creating the handler arg list

		data = data == null ?

			[ event ] :

			jQuery.makeArray( data, [ event ] );



		// Allow special events to draw outside the lines

		special = jQuery.event.special[ type ] || {};

		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {

			return;

		}



		// Determine event propagation path in advance, per W3C events spec (#9951)

		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)

		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {



			bubbleType = special.delegateType || type;

			if ( !rfocusMorph.test( bubbleType + type ) ) {

				cur = cur.parentNode;

			}

			for ( ; cur; cur = cur.parentNode ) {

				eventPath.push( cur );

				tmp = cur;

			}



			// Only add window if we got to document (e.g., not plain obj or detached DOM)

			if ( tmp === ( elem.ownerDocument || document ) ) {

				eventPath.push( tmp.defaultView || tmp.parentWindow || window );

			}

		}



		// Fire handlers on the event path

		i = 0;

		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			lastElement = cur;

			event.type = i > 1 ?

				bubbleType :

				special.bindType || type;



			// jQuery handler

			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&

				dataPriv.get( cur, "handle" );

			if ( handle ) {

				handle.apply( cur, data );

			}



			// Native handler

			handle = ontype && cur[ ontype ];

			if ( handle && handle.apply && acceptData( cur ) ) {

				event.result = handle.apply( cur, data );

				if ( event.result === false ) {

					event.preventDefault();

				}

			}

		}

		event.type = type;



		// If nobody prevented the default action, do it now

		if ( !onlyHandlers && !event.isDefaultPrevented() ) {



			if ( ( !special._default ||

				special._default.apply( eventPath.pop(), data ) === false ) &&

				acceptData( elem ) ) {



				// Call a native DOM method on the target with the same name as the event.

				// Don't do default actions on window, that's where global variables be (#6170)

				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {



					// Don't re-trigger an onFOO event when we call its FOO() method

					tmp = elem[ ontype ];



					if ( tmp ) {

						elem[ ontype ] = null;

					}



					// Prevent re-triggering of the same event, since we already bubbled it above

					jQuery.event.triggered = type;



					if ( event.isPropagationStopped() ) {

						lastElement.addEventListener( type, stopPropagationCallback );

					}



					elem[ type ]();



					if ( event.isPropagationStopped() ) {

						lastElement.removeEventListener( type, stopPropagationCallback );

					}



					jQuery.event.triggered = undefined;



					if ( tmp ) {

						elem[ ontype ] = tmp;

					}

				}

			}

		}



		return event.result;

	},



	// Piggyback on a donor event to simulate a different one

	// Used only for `focus(in | out)` events

	simulate: function( type, elem, event ) {

		var e = jQuery.extend(

			new jQuery.Event(),

			event,

			{

				type: type,

				isSimulated: true

			}

		);



		jQuery.event.trigger( e, null, elem );

	}



} );



jQuery.fn.extend( {



	trigger: function( type, data ) {

		return this.each( function() {

			jQuery.event.trigger( type, data, this );

		} );

	},

	triggerHandler: function( type, data ) {

		var elem = this[ 0 ];

		if ( elem ) {

			return jQuery.event.trigger( type, data, elem, true );

		}

	}

} );





// Support: Firefox <=44

// Firefox doesn't have focus(in | out) events

// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787

//

// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1

// focus(in | out) events fire after focus & blur events,

// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order

// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

if ( !support.focusin ) {

	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {



		// Attach a single capturing handler on the document while someone wants focusin/focusout

		var handler = function( event ) {

			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );

		};



		jQuery.event.special[ fix ] = {

			setup: function() {

				var doc = this.ownerDocument || this,

					attaches = dataPriv.access( doc, fix );



				if ( !attaches ) {

					doc.addEventListener( orig, handler, true );

				}

				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );

			},

			teardown: function() {

				var doc = this.ownerDocument || this,

					attaches = dataPriv.access( doc, fix ) - 1;



				if ( !attaches ) {

					doc.removeEventListener( orig, handler, true );

					dataPriv.remove( doc, fix );



				} else {

					dataPriv.access( doc, fix, attaches );

				}

			}

		};

	} );

}

var location = window.location;



var nonce = Date.now();



var rquery = ( /\?/ );







// Cross-browser xml parsing

jQuery.parseXML = function( data ) {

	var xml;

	if ( !data || typeof data !== "string" ) {

		return null;

	}



	// Support: IE 9 - 11 only

	// IE throws on parseFromString with invalid input.

	try {

		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );

	} catch ( e ) {

		xml = undefined;

	}



	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {

		jQuery.error( "Invalid XML: " + data );

	}

	return xml;

};





var

	rbracket = /\[\]$/,

	rCRLF = /\r?\n/g,

	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,

	rsubmittable = /^(?:input|select|textarea|keygen)/i;



function buildParams( prefix, obj, traditional, add ) {

	var name;



	if ( Array.isArray( obj ) ) {



		// Serialize array item.

		jQuery.each( obj, function( i, v ) {

			if ( traditional || rbracket.test( prefix ) ) {



				// Treat each array item as a scalar.

				add( prefix, v );



			} else {



				// Item is non-scalar (array or object), encode its numeric index.

				buildParams(

					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",

					v,

					traditional,

					add

				);

			}

		} );



	} else if ( !traditional && toType( obj ) === "object" ) {



		// Serialize object item.

		for ( name in obj ) {

			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );

		}



	} else {



		// Serialize scalar item.

		add( prefix, obj );

	}

}



// Serialize an array of form elements or a set of

// key/values into a query string

jQuery.param = function( a, traditional ) {

	var prefix,

		s = [],

		add = function( key, valueOrFunction ) {



			// If value is a function, invoke it and use its return value

			var value = isFunction( valueOrFunction ) ?

				valueOrFunction() :

				valueOrFunction;



			s[ s.length ] = encodeURIComponent( key ) + "=" +

				encodeURIComponent( value == null ? "" : value );

		};



	// If an array was passed in, assume that it is an array of form elements.

	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {



		// Serialize the form elements

		jQuery.each( a, function() {

			add( this.name, this.value );

		} );



	} else {



		// If traditional, encode the "old" way (the way 1.3.2 or older

		// did it), otherwise encode params recursively.

		for ( prefix in a ) {

			buildParams( prefix, a[ prefix ], traditional, add );

		}

	}



	// Return the resulting serialization

	return s.join( "&" );

};



jQuery.fn.extend( {

	serialize: function() {

		return jQuery.param( this.serializeArray() );

	},

	serializeArray: function() {

		return this.map( function() {



			// Can add propHook for "elements" to filter or add form elements

			var elements = jQuery.prop( this, "elements" );

			return elements ? jQuery.makeArray( elements ) : this;

		} )

		.filter( function() {

			var type = this.type;



			// Use .is( ":disabled" ) so that fieldset[disabled] works

			return this.name && !jQuery( this ).is( ":disabled" ) &&

				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&

				( this.checked || !rcheckableType.test( type ) );

		} )

		.map( function( i, elem ) {

			var val = jQuery( this ).val();



			if ( val == null ) {

				return null;

			}



			if ( Array.isArray( val ) ) {

				return jQuery.map( val, function( val ) {

					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };

				} );

			}



			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };

		} ).get();

	}

} );





var

	r20 = /%20/g,

	rhash = /#.*$/,

	rantiCache = /([?&])_=[^&]*/,

	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,



	// #7653, #8125, #8152: local protocol detection

	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,

	rnoContent = /^(?:GET|HEAD)$/,

	rprotocol = /^\/\//,



	/* Prefilters

	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)

	 * 2) These are called:

	 *    - BEFORE asking for a transport

	 *    - AFTER param serialization (s.data is a string if s.processData is true)

	 * 3) key is the dataType

	 * 4) the catchall symbol "*" can be used

	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed

	 */

	prefilters = {},



	/* Transports bindings

	 * 1) key is the dataType

	 * 2) the catchall symbol "*" can be used

	 * 3) selection will start with transport dataType and THEN go to "*" if needed

	 */

	transports = {},



	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression

	allTypes = "*/".concat( "*" ),



	// Anchor tag for parsing the document origin

	originAnchor = document.createElement( "a" );

	originAnchor.href = location.href;



// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

function addToPrefiltersOrTransports( structure ) {



	// dataTypeExpression is optional and defaults to "*"

	return function( dataTypeExpression, func ) {



		if ( typeof dataTypeExpression !== "string" ) {

			func = dataTypeExpression;

			dataTypeExpression = "*";

		}



		var dataType,

			i = 0,

			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];



		if ( isFunction( func ) ) {



			// For each dataType in the dataTypeExpression

			while ( ( dataType = dataTypes[ i++ ] ) ) {



				// Prepend if requested

				if ( dataType[ 0 ] === "+" ) {

					dataType = dataType.slice( 1 ) || "*";

					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );



				// Otherwise append

				} else {

					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );

				}

			}

		}

	};

}



// Base inspection function for prefilters and transports

function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {



	var inspected = {},

		seekingTransport = ( structure === transports );



	function inspect( dataType ) {

		var selected;

		inspected[ dataType ] = true;

		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {

			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );

			if ( typeof dataTypeOrTransport === "string" &&

				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {



				options.dataTypes.unshift( dataTypeOrTransport );

				inspect( dataTypeOrTransport );

				return false;

			} else if ( seekingTransport ) {

				return !( selected = dataTypeOrTransport );

			}

		} );

		return selected;

	}



	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );

}



// A special extend for ajax options

// that takes "flat" options (not to be deep extended)

// Fixes #9887

function ajaxExtend( target, src ) {

	var key, deep,

		flatOptions = jQuery.ajaxSettings.flatOptions || {};



	for ( key in src ) {

		if ( src[ key ] !== undefined ) {

			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];

		}

	}

	if ( deep ) {

		jQuery.extend( true, target, deep );

	}



	return target;

}



/* Handles responses to an ajax request:

 * - finds the right dataType (mediates between content-type and expected dataType)

 * - returns the corresponding response

 */

function ajaxHandleResponses( s, jqXHR, responses ) {



	var ct, type, finalDataType, firstDataType,

		contents = s.contents,

		dataTypes = s.dataTypes;



	// Remove auto dataType and get content-type in the process

	while ( dataTypes[ 0 ] === "*" ) {

		dataTypes.shift();

		if ( ct === undefined ) {

			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );

		}

	}



	// Check if we're dealing with a known content-type

	if ( ct ) {

		for ( type in contents ) {

			if ( contents[ type ] && contents[ type ].test( ct ) ) {

				dataTypes.unshift( type );

				break;

			}

		}

	}



	// Check to see if we have a response for the expected dataType

	if ( dataTypes[ 0 ] in responses ) {

		finalDataType = dataTypes[ 0 ];

	} else {



		// Try convertible dataTypes

		for ( type in responses ) {

			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {

				finalDataType = type;

				break;

			}

			if ( !firstDataType ) {

				firstDataType = type;

			}

		}



		// Or just use first one

		finalDataType = finalDataType || firstDataType;

	}



	// If we found a dataType

	// We add the dataType to the list if needed

	// and return the corresponding response

	if ( finalDataType ) {

		if ( finalDataType !== dataTypes[ 0 ] ) {

			dataTypes.unshift( finalDataType );

		}

		return responses[ finalDataType ];

	}

}



/* Chain conversions given the request and the original response

 * Also sets the responseXXX fields on the jqXHR instance

 */

function ajaxConvert( s, response, jqXHR, isSuccess ) {

	var conv2, current, conv, tmp, prev,

		converters = {},



		// Work with a copy of dataTypes in case we need to modify it for conversion

		dataTypes = s.dataTypes.slice();



	// Create converters map with lowercased keys

	if ( dataTypes[ 1 ] ) {

		for ( conv in s.converters ) {

			converters[ conv.toLowerCase() ] = s.converters[ conv ];

		}

	}



	current = dataTypes.shift();



	// Convert to each sequential dataType

	while ( current ) {



		if ( s.responseFields[ current ] ) {

			jqXHR[ s.responseFields[ current ] ] = response;

		}



		// Apply the dataFilter if provided

		if ( !prev && isSuccess && s.dataFilter ) {

			response = s.dataFilter( response, s.dataType );

		}



		prev = current;

		current = dataTypes.shift();



		if ( current ) {



			// There's only work to do if current dataType is non-auto

			if ( current === "*" ) {



				current = prev;



			// Convert response if prev dataType is non-auto and differs from current

			} else if ( prev !== "*" && prev !== current ) {



				// Seek a direct converter

				conv = converters[ prev + " " + current ] || converters[ "* " + current ];



				// If none found, seek a pair

				if ( !conv ) {

					for ( conv2 in converters ) {



						// If conv2 outputs current

						tmp = conv2.split( " " );

						if ( tmp[ 1 ] === current ) {



							// If prev can be converted to accepted input

							conv = converters[ prev + " " + tmp[ 0 ] ] ||

								converters[ "* " + tmp[ 0 ] ];

							if ( conv ) {



								// Condense equivalence converters

								if ( conv === true ) {

									conv = converters[ conv2 ];



								// Otherwise, insert the intermediate dataType

								} else if ( converters[ conv2 ] !== true ) {

									current = tmp[ 0 ];

									dataTypes.unshift( tmp[ 1 ] );

								}

								break;

							}

						}

					}

				}



				// Apply converter (if not an equivalence)

				if ( conv !== true ) {



					// Unless errors are allowed to bubble, catch and return them

					if ( conv && s.throws ) {

						response = conv( response );

					} else {

						try {

							response = conv( response );

						} catch ( e ) {

							return {

								state: "parsererror",

								error: conv ? e : "No conversion from " + prev + " to " + current

							};

						}

					}

				}

			}

		}

	}



	return { state: "success", data: response };

}



jQuery.extend( {



	// Counter for holding the number of active queries

	active: 0,



	// Last-Modified header cache for next request

	lastModified: {},

	etag: {},



	ajaxSettings: {

		url: location.href,

		type: "GET",

		isLocal: rlocalProtocol.test( location.protocol ),

		global: true,

		processData: true,

		async: true,

		contentType: "application/x-www-form-urlencoded; charset=UTF-8",



		/*

		timeout: 0,

		data: null,

		dataType: null,

		username: null,

		password: null,

		cache: null,

		throws: false,

		traditional: false,

		headers: {},

		*/



		accepts: {

			"*": allTypes,

			text: "text/plain",

			html: "text/html",

			xml: "application/xml, text/xml",

			json: "application/json, text/javascript"

		},



		contents: {

			xml: /\bxml\b/,

			html: /\bhtml/,

			json: /\bjson\b/

		},



		responseFields: {

			xml: "responseXML",

			text: "responseText",

			json: "responseJSON"

		},



		// Data converters

		// Keys separate source (or catchall "*") and destination types with a single space

		converters: {



			// Convert anything to text

			"* text": String,



			// Text to html (true = no transformation)

			"text html": true,



			// Evaluate text as a json expression

			"text json": JSON.parse,



			// Parse text as xml

			"text xml": jQuery.parseXML

		},



		// For options that shouldn't be deep extended:

		// you can add your own custom options here if

		// and when you create one that shouldn't be

		// deep extended (see ajaxExtend)

		flatOptions: {

			url: true,

			context: true

		}

	},



	// Creates a full fledged settings object into target

	// with both ajaxSettings and settings fields.

	// If target is omitted, writes into ajaxSettings.

	ajaxSetup: function( target, settings ) {

		return settings ?



			// Building a settings object

			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :



			// Extending ajaxSettings

			ajaxExtend( jQuery.ajaxSettings, target );

	},



	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),

	ajaxTransport: addToPrefiltersOrTransports( transports ),



	// Main method

	ajax: function( url, options ) {



		// If url is an object, simulate pre-1.5 signature

		if ( typeof url === "object" ) {

			options = url;

			url = undefined;

		}



		// Force options to be an object

		options = options || {};



		var transport,



			// URL without anti-cache param

			cacheURL,



			// Response headers

			responseHeadersString,

			responseHeaders,



			// timeout handle

			timeoutTimer,



			// Url cleanup var

			urlAnchor,



			// Request state (becomes false upon send and true upon completion)

			completed,



			// To know if global events are to be dispatched

			fireGlobals,



			// Loop variable

			i,



			// uncached part of the url

			uncached,



			// Create the final options object

			s = jQuery.ajaxSetup( {}, options ),



			// Callbacks context

			callbackContext = s.context || s,



			// Context for global events is callbackContext if it is a DOM node or jQuery collection

			globalEventContext = s.context &&

				( callbackContext.nodeType || callbackContext.jquery ) ?

					jQuery( callbackContext ) :

					jQuery.event,



			// Deferreds

			deferred = jQuery.Deferred(),

			completeDeferred = jQuery.Callbacks( "once memory" ),



			// Status-dependent callbacks

			statusCode = s.statusCode || {},



			// Headers (they are sent all at once)

			requestHeaders = {},

			requestHeadersNames = {},



			// Default abort message

			strAbort = "canceled",



			// Fake xhr

			jqXHR = {

				readyState: 0,



				// Builds headers hashtable if needed

				getResponseHeader: function( key ) {

					var match;

					if ( completed ) {

						if ( !responseHeaders ) {

							responseHeaders = {};

							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {

								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];

							}

						}

						match = responseHeaders[ key.toLowerCase() ];

					}

					return match == null ? null : match;

				},



				// Raw string

				getAllResponseHeaders: function() {

					return completed ? responseHeadersString : null;

				},



				// Caches the header

				setRequestHeader: function( name, value ) {

					if ( completed == null ) {

						name = requestHeadersNames[ name.toLowerCase() ] =

							requestHeadersNames[ name.toLowerCase() ] || name;

						requestHeaders[ name ] = value;

					}

					return this;

				},



				// Overrides response content-type header

				overrideMimeType: function( type ) {

					if ( completed == null ) {

						s.mimeType = type;

					}

					return this;

				},



				// Status-dependent callbacks

				statusCode: function( map ) {

					var code;

					if ( map ) {

						if ( completed ) {



							// Execute the appropriate callbacks

							jqXHR.always( map[ jqXHR.status ] );

						} else {



							// Lazy-add the new callbacks in a way that preserves old ones

							for ( code in map ) {

								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];

							}

						}

					}

					return this;

				},



				// Cancel the request

				abort: function( statusText ) {

					var finalText = statusText || strAbort;

					if ( transport ) {

						transport.abort( finalText );

					}

					done( 0, finalText );

					return this;

				}

			};



		// Attach deferreds

		deferred.promise( jqXHR );



		// Add protocol if not provided (prefilters might expect it)

		// Handle falsy url in the settings object (#10093: consistency with old signature)

		// We also use the url parameter if available

		s.url = ( ( url || s.url || location.href ) + "" )

			.replace( rprotocol, location.protocol + "//" );



		// Alias method option to type as per ticket #12004

		s.type = options.method || options.type || s.method || s.type;



		// Extract dataTypes list

		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];



		// A cross-domain request is in order when the origin doesn't match the current origin.

		if ( s.crossDomain == null ) {

			urlAnchor = document.createElement( "a" );



			// Support: IE <=8 - 11, Edge 12 - 15

			// IE throws exception on accessing the href property if url is malformed,

			// e.g. http://example.com:80x/

			try {

				urlAnchor.href = s.url;



				// Support: IE <=8 - 11 only

				// Anchor's host property isn't correctly set when s.url is relative

				urlAnchor.href = urlAnchor.href;

				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==

					urlAnchor.protocol + "//" + urlAnchor.host;

			} catch ( e ) {



				// If there is an error parsing the URL, assume it is crossDomain,

				// it can be rejected by the transport if it is invalid

				s.crossDomain = true;

			}

		}



		// Convert data if not already a string

		if ( s.data && s.processData && typeof s.data !== "string" ) {

			s.data = jQuery.param( s.data, s.traditional );

		}



		// Apply prefilters

		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );



		// If request was aborted inside a prefilter, stop there

		if ( completed ) {

			return jqXHR;

		}



		// We can fire global events as of now if asked to

		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)

		fireGlobals = jQuery.event && s.global;



		// Watch for a new set of requests

		if ( fireGlobals && jQuery.active++ === 0 ) {

			jQuery.event.trigger( "ajaxStart" );

		}



		// Uppercase the type

		s.type = s.type.toUpperCase();



		// Determine if request has content

		s.hasContent = !rnoContent.test( s.type );



		// Save the URL in case we're toying with the If-Modified-Since

		// and/or If-None-Match header later on

		// Remove hash to simplify url manipulation

		cacheURL = s.url.replace( rhash, "" );



		// More options handling for requests with no content

		if ( !s.hasContent ) {



			// Remember the hash so we can put it back

			uncached = s.url.slice( cacheURL.length );



			// If data is available and should be processed, append data to url

			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {

				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;



				// #9682: remove data so that it's not used in an eventual retry

				delete s.data;

			}



			// Add or update anti-cache param if needed

			if ( s.cache === false ) {

				cacheURL = cacheURL.replace( rantiCache, "$1" );

				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;

			}



			// Put hash and anti-cache on the URL that will be requested (gh-1732)

			s.url = cacheURL + uncached;



		// Change '%20' to '+' if this is encoded form body content (gh-2658)

		} else if ( s.data && s.processData &&

			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {

			s.data = s.data.replace( r20, "+" );

		}



		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.

		if ( s.ifModified ) {

			if ( jQuery.lastModified[ cacheURL ] ) {

				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );

			}

			if ( jQuery.etag[ cacheURL ] ) {

				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );

			}

		}



		// Set the correct header, if data is being sent

		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {

			jqXHR.setRequestHeader( "Content-Type", s.contentType );

		}



		// Set the Accepts header for the server, depending on the dataType

		jqXHR.setRequestHeader(

			"Accept",

			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?

				s.accepts[ s.dataTypes[ 0 ] ] +

					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :

				s.accepts[ "*" ]

		);



		// Check for headers option

		for ( i in s.headers ) {

			jqXHR.setRequestHeader( i, s.headers[ i ] );

		}



		// Allow custom headers/mimetypes and early abort

		if ( s.beforeSend &&

			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {



			// Abort if not done already and return

			return jqXHR.abort();

		}



		// Aborting is no longer a cancellation

		strAbort = "abort";



		// Install callbacks on deferreds

		completeDeferred.add( s.complete );

		jqXHR.done( s.success );

		jqXHR.fail( s.error );



		// Get transport

		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );



		// If no transport, we auto-abort

		if ( !transport ) {

			done( -1, "No Transport" );

		} else {

			jqXHR.readyState = 1;



			// Send global event

			if ( fireGlobals ) {

				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );

			}



			// If request was aborted inside ajaxSend, stop there

			if ( completed ) {

				return jqXHR;

			}



			// Timeout

			if ( s.async && s.timeout > 0 ) {

				timeoutTimer = window.setTimeout( function() {

					jqXHR.abort( "timeout" );

				}, s.timeout );

			}



			try {

				completed = false;

				transport.send( requestHeaders, done );

			} catch ( e ) {



				// Rethrow post-completion exceptions

				if ( completed ) {

					throw e;

				}



				// Propagate others as results

				done( -1, e );

			}

		}



		// Callback for when everything is done

		function done( status, nativeStatusText, responses, headers ) {

			var isSuccess, success, error, response, modified,

				statusText = nativeStatusText;



			// Ignore repeat invocations

			if ( completed ) {

				return;

			}



			completed = true;



			// Clear timeout if it exists

			if ( timeoutTimer ) {

				window.clearTimeout( timeoutTimer );

			}



			// Dereference transport for early garbage collection

			// (no matter how long the jqXHR object will be used)

			transport = undefined;



			// Cache response headers

			responseHeadersString = headers || "";



			// Set readyState

			jqXHR.readyState = status > 0 ? 4 : 0;



			// Determine if successful

			isSuccess = status >= 200 && status < 300 || status === 304;



			// Get response data

			if ( responses ) {

				response = ajaxHandleResponses( s, jqXHR, responses );

			}



			// Convert no matter what (that way responseXXX fields are always set)

			response = ajaxConvert( s, response, jqXHR, isSuccess );



			// If successful, handle type chaining

			if ( isSuccess ) {



				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.

				if ( s.ifModified ) {

					modified = jqXHR.getResponseHeader( "Last-Modified" );

					if ( modified ) {

						jQuery.lastModified[ cacheURL ] = modified;

					}

					modified = jqXHR.getResponseHeader( "etag" );

					if ( modified ) {

						jQuery.etag[ cacheURL ] = modified;

					}

				}



				// if no content

				if ( status === 204 || s.type === "HEAD" ) {

					statusText = "nocontent";



				// if not modified

				} else if ( status === 304 ) {

					statusText = "notmodified";



				// If we have data, let's convert it

				} else {

					statusText = response.state;

					success = response.data;

					error = response.error;

					isSuccess = !error;

				}

			} else {



				// Extract error from statusText and normalize for non-aborts

				error = statusText;

				if ( status || !statusText ) {

					statusText = "error";

					if ( status < 0 ) {

						status = 0;

					}

				}

			}



			// Set data for the fake xhr object

			jqXHR.status = status;

			jqXHR.statusText = ( nativeStatusText || statusText ) + "";



			// Success/Error

			if ( isSuccess ) {

				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );

			} else {

				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );

			}



			// Status-dependent callbacks

			jqXHR.statusCode( statusCode );

			statusCode = undefined;



			if ( fireGlobals ) {

				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",

					[ jqXHR, s, isSuccess ? success : error ] );

			}



			// Complete

			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );



			if ( fireGlobals ) {

				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );



				// Handle the global AJAX counter

				if ( !( --jQuery.active ) ) {

					jQuery.event.trigger( "ajaxStop" );

				}

			}

		}



		return jqXHR;

	},



	getJSON: function( url, data, callback ) {

		return jQuery.get( url, data, callback, "json" );

	},



	getScript: function( url, callback ) {

		return jQuery.get( url, undefined, callback, "script" );

	}

} );



jQuery.each( [ "get", "post" ], function( i, method ) {

	jQuery[ method ] = function( url, data, callback, type ) {



		// Shift arguments if data argument was omitted

		if ( isFunction( data ) ) {

			type = type || callback;

			callback = data;

			data = undefined;

		}



		// The url can be an options object (which then must have .url)

		return jQuery.ajax( jQuery.extend( {

			url: url,

			type: method,

			dataType: type,

			data: data,

			success: callback

		}, jQuery.isPlainObject( url ) && url ) );

	};

} );





jQuery._evalUrl = function( url ) {

	return jQuery.ajax( {

		url: url,



		// Make this explicit, since user can override this through ajaxSetup (#11264)

		type: "GET",

		dataType: "script",

		cache: true,

		async: false,

		global: false,

		"throws": true

	} );

};





jQuery.fn.extend( {

	wrapAll: function( html ) {

		var wrap;



		if ( this[ 0 ] ) {

			if ( isFunction( html ) ) {

				html = html.call( this[ 0 ] );

			}



			// The elements to wrap the target around

			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );



			if ( this[ 0 ].parentNode ) {

				wrap.insertBefore( this[ 0 ] );

			}



			wrap.map( function() {

				var elem = this;



				while ( elem.firstElementChild ) {

					elem = elem.firstElementChild;

				}



				return elem;

			} ).append( this );

		}



		return this;

	},



	wrapInner: function( html ) {

		if ( isFunction( html ) ) {

			return this.each( function( i ) {

				jQuery( this ).wrapInner( html.call( this, i ) );

			} );

		}



		return this.each( function() {

			var self = jQuery( this ),

				contents = self.contents();



			if ( contents.length ) {

				contents.wrapAll( html );



			} else {

				self.append( html );

			}

		} );

	},



	wrap: function( html ) {

		var htmlIsFunction = isFunction( html );



		return this.each( function( i ) {

			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );

		} );

	},



	unwrap: function( selector ) {

		this.parent( selector ).not( "body" ).each( function() {

			jQuery( this ).replaceWith( this.childNodes );

		} );

		return this;

	}

} );





jQuery.expr.pseudos.hidden = function( elem ) {

	return !jQuery.expr.pseudos.visible( elem );

};

jQuery.expr.pseudos.visible = function( elem ) {

	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );

};









jQuery.ajaxSettings.xhr = function() {

	try {

		return new window.XMLHttpRequest();

	} catch ( e ) {}

};



var xhrSuccessStatus = {



		// File protocol always yields status code 0, assume 200

		0: 200,



		// Support: IE <=9 only

		// #1450: sometimes IE returns 1223 when it should be 204

		1223: 204

	},

	xhrSupported = jQuery.ajaxSettings.xhr();



support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );

support.ajax = xhrSupported = !!xhrSupported;



jQuery.ajaxTransport( function( options ) {

	var callback, errorCallback;



	// Cross domain only allowed if supported through XMLHttpRequest

	if ( support.cors || xhrSupported && !options.crossDomain ) {

		return {

			send: function( headers, complete ) {

				var i,

					xhr = options.xhr();



				xhr.open(

					options.type,

					options.url,

					options.async,

					options.username,

					options.password

				);



				// Apply custom fields if provided

				if ( options.xhrFields ) {

					for ( i in options.xhrFields ) {

						xhr[ i ] = options.xhrFields[ i ];

					}

				}



				// Override mime type if needed

				if ( options.mimeType && xhr.overrideMimeType ) {

					xhr.overrideMimeType( options.mimeType );

				}



				// X-Requested-With header

				// For cross-domain requests, seeing as conditions for a preflight are

				// akin to a jigsaw puzzle, we simply never set it to be sure.

				// (it can always be set on a per-request basis or even using ajaxSetup)

				// For same-domain requests, won't change header if already provided.

				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {

					headers[ "X-Requested-With" ] = "XMLHttpRequest";

				}



				// Set headers

				for ( i in headers ) {

					xhr.setRequestHeader( i, headers[ i ] );

				}



				// Callback

				callback = function( type ) {

					return function() {

						if ( callback ) {

							callback = errorCallback = xhr.onload =

								xhr.onerror = xhr.onabort = xhr.ontimeout =

									xhr.onreadystatechange = null;



							if ( type === "abort" ) {

								xhr.abort();

							} else if ( type === "error" ) {



								// Support: IE <=9 only

								// On a manual native abort, IE9 throws

								// errors on any property access that is not readyState

								if ( typeof xhr.status !== "number" ) {

									complete( 0, "error" );

								} else {

									complete(



										// File: protocol always yields status 0; see #8605, #14207

										xhr.status,

										xhr.statusText

									);

								}

							} else {

								complete(

									xhrSuccessStatus[ xhr.status ] || xhr.status,

									xhr.statusText,



									// Support: IE <=9 only

									// IE9 has no XHR2 but throws on binary (trac-11426)

									// For XHR2 non-text, let the caller handle it (gh-2498)

									( xhr.responseType || "text" ) !== "text"  ||

									typeof xhr.responseText !== "string" ?

										{ binary: xhr.response } :

										{ text: xhr.responseText },

									xhr.getAllResponseHeaders()

								);

							}

						}

					};

				};



				// Listen to events

				xhr.onload = callback();

				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );



				// Support: IE 9 only

				// Use onreadystatechange to replace onabort

				// to handle uncaught aborts

				if ( xhr.onabort !== undefined ) {

					xhr.onabort = errorCallback;

				} else {

					xhr.onreadystatechange = function() {



						// Check readyState before timeout as it changes

						if ( xhr.readyState === 4 ) {



							// Allow onerror to be called first,

							// but that will not handle a native abort

							// Also, save errorCallback to a variable

							// as xhr.onerror cannot be accessed

							window.setTimeout( function() {

								if ( callback ) {

									errorCallback();

								}

							} );

						}

					};

				}



				// Create the abort callback

				callback = callback( "abort" );



				try {



					// Do send the request (this may raise an exception)

					xhr.send( options.hasContent && options.data || null );

				} catch ( e ) {



					// #14683: Only rethrow if this hasn't been notified as an error yet

					if ( callback ) {

						throw e;

					}

				}

			},



			abort: function() {

				if ( callback ) {

					callback();

				}

			}

		};

	}

} );









// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

jQuery.ajaxPrefilter( function( s ) {

	if ( s.crossDomain ) {

		s.contents.script = false;

	}

} );



// Install script dataType

jQuery.ajaxSetup( {

	accepts: {

		script: "text/javascript, application/javascript, " +

			"application/ecmascript, application/x-ecmascript"

	},

	contents: {

		script: /\b(?:java|ecma)script\b/

	},

	converters: {

		"text script": function( text ) {

			jQuery.globalEval( text );

			return text;

		}

	}

} );



// Handle cache's special case and crossDomain

jQuery.ajaxPrefilter( "script", function( s ) {

	if ( s.cache === undefined ) {

		s.cache = false;

	}

	if ( s.crossDomain ) {

		s.type = "GET";

	}

} );



// Bind script tag hack transport

jQuery.ajaxTransport( "script", function( s ) {



	// This transport only deals with cross domain requests

	if ( s.crossDomain ) {

		var script, callback;

		return {

			send: function( _, complete ) {

				script = jQuery( "<script>" ).prop( {

					charset: s.scriptCharset,

					src: s.url

				} ).on(

					"load error",

					callback = function( evt ) {

						script.remove();

						callback = null;

						if ( evt ) {

							complete( evt.type === "error" ? 404 : 200, evt.type );

						}

					}

				);



				// Use native DOM manipulation to avoid our domManip AJAX trickery

				document.head.appendChild( script[ 0 ] );

			},

			abort: function() {

				if ( callback ) {

					callback();

				}

			}

		};

	}

} );









var oldCallbacks = [],

	rjsonp = /(=)\?(?=&|$)|\?\?/;



// Default jsonp settings

jQuery.ajaxSetup( {

	jsonp: "callback",

	jsonpCallback: function() {

		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );

		this[ callback ] = true;

		return callback;

	}

} );



// Detect, normalize options and install callbacks for jsonp requests

jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {



	var callbackName, overwritten, responseContainer,

		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?

			"url" :

			typeof s.data === "string" &&

				( s.contentType || "" )

					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&

				rjsonp.test( s.data ) && "data"

		);



	// Handle iff the expected data type is "jsonp" or we have a parameter to set

	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {



		// Get callback name, remembering preexisting value associated with it

		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?

			s.jsonpCallback() :

			s.jsonpCallback;



		// Insert callback into url or form data

		if ( jsonProp ) {

			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );

		} else if ( s.jsonp !== false ) {

			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;

		}



		// Use data converter to retrieve json after script execution

		s.converters[ "script json" ] = function() {

			if ( !responseContainer ) {

				jQuery.error( callbackName + " was not called" );

			}

			return responseContainer[ 0 ];

		};



		// Force json dataType

		s.dataTypes[ 0 ] = "json";



		// Install callback

		overwritten = window[ callbackName ];

		window[ callbackName ] = function() {

			responseContainer = arguments;

		};



		// Clean-up function (fires after converters)

		jqXHR.always( function() {



			// If previous value didn't exist - remove it

			if ( overwritten === undefined ) {

				jQuery( window ).removeProp( callbackName );



			// Otherwise restore preexisting value

			} else {

				window[ callbackName ] = overwritten;

			}



			// Save back as free

			if ( s[ callbackName ] ) {



				// Make sure that re-using the options doesn't screw things around

				s.jsonpCallback = originalSettings.jsonpCallback;



				// Save the callback name for future use

				oldCallbacks.push( callbackName );

			}



			// Call if it was a function and we have a response

			if ( responseContainer && isFunction( overwritten ) ) {

				overwritten( responseContainer[ 0 ] );

			}



			responseContainer = overwritten = undefined;

		} );



		// Delegate to script

		return "script";

	}

} );









// Support: Safari 8 only

// In Safari 8 documents created via document.implementation.createHTMLDocument

// collapse sibling forms: the second one becomes a child of the first one.

// Because of that, this security measure has to be disabled in Safari 8.

// https://bugs.webkit.org/show_bug.cgi?id=137337

support.createHTMLDocument = ( function() {

	var body = document.implementation.createHTMLDocument( "" ).body;

	body.innerHTML = "<form></form><form></form>";

	return body.childNodes.length === 2;

} )();





// Argument "data" should be string of html

// context (optional): If specified, the fragment will be created in this context,

// defaults to document

// keepScripts (optional): If true, will include scripts passed in the html string

jQuery.parseHTML = function( data, context, keepScripts ) {

	if ( typeof data !== "string" ) {

		return [];

	}

	if ( typeof context === "boolean" ) {

		keepScripts = context;

		context = false;

	}



	var base, parsed, scripts;



	if ( !context ) {



		// Stop scripts or inline event handlers from being executed immediately

		// by using document.implementation

		if ( support.createHTMLDocument ) {

			context = document.implementation.createHTMLDocument( "" );



			// Set the base href for the created document

			// so any parsed elements with URLs

			// are based on the document's URL (gh-2965)

			base = context.createElement( "base" );

			base.href = document.location.href;

			context.head.appendChild( base );

		} else {

			context = document;

		}

	}



	parsed = rsingleTag.exec( data );

	scripts = !keepScripts && [];



	// Single tag

	if ( parsed ) {

		return [ context.createElement( parsed[ 1 ] ) ];

	}



	parsed = buildFragment( [ data ], context, scripts );



	if ( scripts && scripts.length ) {

		jQuery( scripts ).remove();

	}



	return jQuery.merge( [], parsed.childNodes );

};





/**

 * Load a url into a page

 */

jQuery.fn.load = function( url, params, callback ) {

	var selector, type, response,

		self = this,

		off = url.indexOf( " " );



	if ( off > -1 ) {

		selector = stripAndCollapse( url.slice( off ) );

		url = url.slice( 0, off );

	}



	// If it's a function

	if ( isFunction( params ) ) {



		// We assume that it's the callback

		callback = params;

		params = undefined;



	// Otherwise, build a param string

	} else if ( params && typeof params === "object" ) {

		type = "POST";

	}



	// If we have elements to modify, make the request

	if ( self.length > 0 ) {

		jQuery.ajax( {

			url: url,



			// If "type" variable is undefined, then "GET" method will be used.

			// Make value of this field explicit since

			// user can override it through ajaxSetup method

			type: type || "GET",

			dataType: "html",

			data: params

		} ).done( function( responseText ) {



			// Save response for use in complete callback

			response = arguments;



			self.html( selector ?



				// If a selector was specified, locate the right elements in a dummy div

				// Exclude scripts to avoid IE 'Permission Denied' errors

				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :



				// Otherwise use the full result

				responseText );



		// If the request succeeds, this function gets "data", "status", "jqXHR"

		// but they are ignored because response was set above.

		// If it fails, this function gets "jqXHR", "status", "error"

		} ).always( callback && function( jqXHR, status ) {

			self.each( function() {

				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );

			} );

		} );

	}



	return this;

};









// Attach a bunch of functions for handling common AJAX events

jQuery.each( [

	"ajaxStart",

	"ajaxStop",

	"ajaxComplete",

	"ajaxError",

	"ajaxSuccess",

	"ajaxSend"

], function( i, type ) {

	jQuery.fn[ type ] = function( fn ) {

		return this.on( type, fn );

	};

} );









jQuery.expr.pseudos.animated = function( elem ) {

	return jQuery.grep( jQuery.timers, function( fn ) {

		return elem === fn.elem;

	} ).length;

};









jQuery.offset = {

	setOffset: function( elem, options, i ) {

		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,

			position = jQuery.css( elem, "position" ),

			curElem = jQuery( elem ),

			props = {};



		// Set position first, in-case top/left are set even on static elem

		if ( position === "static" ) {

			elem.style.position = "relative";

		}



		curOffset = curElem.offset();

		curCSSTop = jQuery.css( elem, "top" );

		curCSSLeft = jQuery.css( elem, "left" );

		calculatePosition = ( position === "absolute" || position === "fixed" ) &&

			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;



		// Need to be able to calculate position if either

		// top or left is auto and position is either absolute or fixed

		if ( calculatePosition ) {

			curPosition = curElem.position();

			curTop = curPosition.top;

			curLeft = curPosition.left;



		} else {

			curTop = parseFloat( curCSSTop ) || 0;

			curLeft = parseFloat( curCSSLeft ) || 0;

		}



		if ( isFunction( options ) ) {



			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)

			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );

		}



		if ( options.top != null ) {

			props.top = ( options.top - curOffset.top ) + curTop;

		}

		if ( options.left != null ) {

			props.left = ( options.left - curOffset.left ) + curLeft;

		}



		if ( "using" in options ) {

			options.using.call( elem, props );



		} else {

			curElem.css( props );

		}

	}

};



jQuery.fn.extend( {



	// offset() relates an element's border box to the document origin

	offset: function( options ) {



		// Preserve chaining for setter

		if ( arguments.length ) {

			return options === undefined ?

				this :

				this.each( function( i ) {

					jQuery.offset.setOffset( this, options, i );

				} );

		}



		var rect, win,

			elem = this[ 0 ];



		if ( !elem ) {

			return;

		}



		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)

		// Support: IE <=11 only

		// Running getBoundingClientRect on a

		// disconnected node in IE throws an error

		if ( !elem.getClientRects().length ) {

			return { top: 0, left: 0 };

		}



		// Get document-relative position by adding viewport scroll to viewport-relative gBCR

		rect = elem.getBoundingClientRect();

		win = elem.ownerDocument.defaultView;

		return {

			top: rect.top + win.pageYOffset,

			left: rect.left + win.pageXOffset

		};

	},



	// position() relates an element's margin box to its offset parent's padding box

	// This corresponds to the behavior of CSS absolute positioning

	position: function() {

		if ( !this[ 0 ] ) {

			return;

		}



		var offsetParent, offset, doc,

			elem = this[ 0 ],

			parentOffset = { top: 0, left: 0 };



		// position:fixed elements are offset from the viewport, which itself always has zero offset

		if ( jQuery.css( elem, "position" ) === "fixed" ) {



			// Assume position:fixed implies availability of getBoundingClientRect

			offset = elem.getBoundingClientRect();



		} else {

			offset = this.offset();



			// Account for the *real* offset parent, which can be the document or its root element

			// when a statically positioned element is identified

			doc = elem.ownerDocument;

			offsetParent = elem.offsetParent || doc.documentElement;

			while ( offsetParent &&

				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&

				jQuery.css( offsetParent, "position" ) === "static" ) {



				offsetParent = offsetParent.parentNode;

			}

			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {



				// Incorporate borders into its offset, since they are outside its content origin

				parentOffset = jQuery( offsetParent ).offset();

				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );

				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );

			}

		}



		// Subtract parent offsets and element margins

		return {

			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),

			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )

		};

	},



	// This method will return documentElement in the following cases:

	// 1) For the element inside the iframe without offsetParent, this method will return

	//    documentElement of the parent window

	// 2) For the hidden or detached element

	// 3) For body or html element, i.e. in case of the html node - it will return itself

	//

	// but those exceptions were never presented as a real life use-cases

	// and might be considered as more preferable results.

	//

	// This logic, however, is not guaranteed and can change at any point in the future

	offsetParent: function() {

		return this.map( function() {

			var offsetParent = this.offsetParent;



			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.offsetParent;

			}



			return offsetParent || documentElement;

		} );

	}

} );



// Create scrollLeft and scrollTop methods

jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {

	var top = "pageYOffset" === prop;



	jQuery.fn[ method ] = function( val ) {

		return access( this, function( elem, method, val ) {



			// Coalesce documents and windows

			var win;

			if ( isWindow( elem ) ) {

				win = elem;

			} else if ( elem.nodeType === 9 ) {

				win = elem.defaultView;

			}



			if ( val === undefined ) {

				return win ? win[ prop ] : elem[ method ];

			}



			if ( win ) {

				win.scrollTo(

					!top ? val : win.pageXOffset,

					top ? val : win.pageYOffset

				);



			} else {

				elem[ method ] = val;

			}

		}, method, val, arguments.length );

	};

} );



// Support: Safari <=7 - 9.1, Chrome <=37 - 49

// Add the top/left cssHooks using jQuery.fn.position

// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084

// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347

// getComputedStyle returns percent when specified for top/left/bottom/right;

// rather than make the css module depend on the offset module, just check for it here

jQuery.each( [ "top", "left" ], function( i, prop ) {

	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,

		function( elem, computed ) {

			if ( computed ) {

				computed = curCSS( elem, prop );



				// If curCSS returns percentage, fallback to offset

				return rnumnonpx.test( computed ) ?

					jQuery( elem ).position()[ prop ] + "px" :

					computed;

			}

		}

	);

} );





// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {

	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },

		function( defaultExtra, funcName ) {



		// Margin is only for outerHeight, outerWidth

		jQuery.fn[ funcName ] = function( margin, value ) {

			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),

				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );



			return access( this, function( elem, type, value ) {

				var doc;



				if ( isWindow( elem ) ) {



					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)

					return funcName.indexOf( "outer" ) === 0 ?

						elem[ "inner" + name ] :

						elem.document.documentElement[ "client" + name ];

				}



				// Get document width or height

				if ( elem.nodeType === 9 ) {

					doc = elem.documentElement;



					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],

					// whichever is greatest

					return Math.max(

						elem.body[ "scroll" + name ], doc[ "scroll" + name ],

						elem.body[ "offset" + name ], doc[ "offset" + name ],

						doc[ "client" + name ]

					);

				}



				return value === undefined ?



					// Get width or height on the element, requesting but not forcing parseFloat

					jQuery.css( elem, type, extra ) :



					// Set width or height on the element

					jQuery.style( elem, type, value, extra );

			}, type, chainable ? margin : undefined, chainable );

		};

	} );

} );





jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +

	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +

	"change select submit keydown keypress keyup contextmenu" ).split( " " ),

	function( i, name ) {



	// Handle event binding

	jQuery.fn[ name ] = function( data, fn ) {

		return arguments.length > 0 ?

			this.on( name, null, data, fn ) :

			this.trigger( name );

	};

} );



jQuery.fn.extend( {

	hover: function( fnOver, fnOut ) {

		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );

	}

} );









jQuery.fn.extend( {



	bind: function( types, data, fn ) {

		return this.on( types, null, data, fn );

	},

	unbind: function( types, fn ) {

		return this.off( types, null, fn );

	},



	delegate: function( selector, types, data, fn ) {

		return this.on( types, selector, data, fn );

	},

	undelegate: function( selector, types, fn ) {



		// ( namespace ) or ( selector, types [, fn] )

		return arguments.length === 1 ?

			this.off( selector, "**" ) :

			this.off( types, selector || "**", fn );

	}

} );



// Bind a function to a context, optionally partially applying any

// arguments.

// jQuery.proxy is deprecated to promote standards (specifically Function#bind)

// However, it is not slated for removal any time soon

jQuery.proxy = function( fn, context ) {

	var tmp, args, proxy;



	if ( typeof context === "string" ) {

		tmp = fn[ context ];

		context = fn;

		fn = tmp;

	}



	// Quick check to determine if target is callable, in the spec

	// this throws a TypeError, but we will just return undefined.

	if ( !isFunction( fn ) ) {

		return undefined;

	}



	// Simulated bind

	args = slice.call( arguments, 2 );

	proxy = function() {

		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );

	};



	// Set the guid of unique handler to the same of original handler, so it can be removed

	proxy.guid = fn.guid = fn.guid || jQuery.guid++;



	return proxy;

};



jQuery.holdReady = function( hold ) {

	if ( hold ) {

		jQuery.readyWait++;

	} else {

		jQuery.ready( true );

	}

};

jQuery.isArray = Array.isArray;

jQuery.parseJSON = JSON.parse;

jQuery.nodeName = nodeName;

jQuery.isFunction = isFunction;

jQuery.isWindow = isWindow;

jQuery.camelCase = camelCase;

jQuery.type = toType;



jQuery.now = Date.now;



jQuery.isNumeric = function( obj ) {



	// As of jQuery 3.0, isNumeric is limited to

	// strings and numbers (primitives or objects)

	// that can be coerced to finite numbers (gh-2662)

	var type = jQuery.type( obj );

	return ( type === "number" || type === "string" ) &&



		// parseFloat NaNs numeric-cast false positives ("")

		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")

		// subtraction forces infinities to NaN

		!isNaN( obj - parseFloat( obj ) );

};









// Register as a named AMD module, since jQuery can be concatenated with other

// files that may use define, but not via a proper concatenation script that

// understands anonymous AMD modules. A named AMD is safest and most robust

// way to register. Lowercase jquery is used because AMD module names are

// derived from file names, and jQuery is normally delivered in a lowercase

// file name. Do this after creating the global so that if an AMD module wants

// to call noConflict to hide this version of jQuery, it will work.



// Note that for maximum portability, libraries that are not jQuery should

// declare themselves as anonymous modules, and avoid setting a global if an

// AMD loader is present. jQuery is a special case. For more information, see

// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon



if ( typeof define === "function" && define.amd ) {

	define( "jquery", [], function() {

		return jQuery;

	} );

}









var



	// Map over jQuery in case of overwrite

	_jQuery = window.jQuery,



	// Map over the $ in case of overwrite

	_$ = window.$;



jQuery.noConflict = function( deep ) {

	if ( window.$ === jQuery ) {

		window.$ = _$;

	}



	if ( deep && window.jQuery === jQuery ) {

		window.jQuery = _jQuery;

	}



	return jQuery;

};



// Expose jQuery and $ identifiers, even in AMD

// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)

// and CommonJS for browser emulators (#13566)

if ( !noGlobal ) {

	window.jQuery = window.$ = jQuery;

}









return jQuery;

} );


/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){return 11===e?pe:10===e?se:pe||se}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return fe({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.right-p.left,a=s.height||e.clientHeight||p.bottom-p.top,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},d=p?E(e):a(e,t);if('viewport'===r)s=w(d,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=b(l,d,p);if('HTML'===l.nodeName&&!y(d)){var m=c(e.ownerDocument),h=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=h+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}i=i||0;var u='number'==typeof i;return s.left+=u?i:i.left||0,s.top+=u?i:i.top||0,s.right-=u?i:i.right||0,s.bottom-=u?i:i.bottom||0,s}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return fe({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?E(t):a(t,o);return b(o,i,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function D(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function C(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=C(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=D(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function H(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function B(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[H('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function j(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function V(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=C(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ce.indexOf(e),n=ce.slice(o+1).concat(ce.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(C(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document,oe=['Edge','Trident','Firefox'],ne=0,ie=0;ie<oe.length;ie+=1)if(te&&0<=navigator.userAgent.indexOf(oe[ie])){ne=1;break}var i=te&&window.Promise,re=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ne))}},pe=te&&!!(window.MSInputMethodContext&&document.documentMode),se=te&&/MSIE 10/.test(navigator.userAgent),de=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},ae=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),le=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},fe=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},me=te&&/Firefox/i.test(navigator.userAgent),he=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ce=he.slice(3),ge={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ue=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};de(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=re(this.update.bind(this)),this.options=fe({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(fe({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=fe({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return fe({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return ae(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return B.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ue.Utils=('undefined'==typeof window?global:window).PopperUtils,ue.placements=he,ue.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:le({},d,r[d]),end:le({},d,r[d]+r[a]-p[a])};e.offsets.popper=fe({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=H('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),le({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),le({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=fe({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},le(n,m,$(v)),le(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ge.FLIP:p=[n,i];break;case ge.CLOCKWISE:p=G(n);break;case ge.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u);(m||b||y)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),y&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=fe({},e.offsets.popper,D(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=C(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=C(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!me),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=H('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=fe({},E,e.attributes),e.styles=fe({},m,e.styles),e.arrowStyles=fe({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return j(e.instance.popper,e.styles),V(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&j(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),j(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ue});
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('jquery'), require('popper.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'jquery', 'popper.js'], factory) :
  (global = global || self, factory(global.bootstrap = {}, global.jQuery, global.Popper));
}(this, function (exports, $, Popper) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    }
  };
  setTransitionEndSupport();

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.3.1';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype;

    // Public
    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(ClassName.SHOW);

      if (!$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$1 = 'button';
  var VERSION$1 = '4.3.1';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var ClassName$1 = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector$1 = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input:not([type="hidden"])',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event$1 = {
    CLICK_DATA_API: "click" + EVENT_KEY$1 + DATA_API_KEY$1,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1)
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype;

    // Public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector$1.DATA_TOGGLE)[0];

      if (rootElement) {
        var input = this._element.querySelector(Selector$1.INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(ClassName$1.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(Selector$1.ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(ClassName$1.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
              return;
            }

            input.checked = !this._element.classList.contains(ClassName$1.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed', !this._element.classList.contains(ClassName$1.ACTIVE));
      }

      if (triggerChangeEvent) {
        $(this._element).toggleClass(ClassName$1.ACTIVE);
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$1.CLICK_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();
    var button = event.target;

    if (!$(button).hasClass(ClassName$1.BUTTON)) {
      button = $(button).closest(Selector$1.BUTTON);
    }

    Button._jQueryInterface.call($(button), 'toggle');
  }).on(Event$1.FOCUS_BLUR_DATA_API, Selector$1.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector$1.BUTTON)[0];
    $(button).toggleClass(ClassName$1.FOCUS, /^focus(in)?$/.test(event.type));
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$2 = 'carousel';
  var VERSION$2 = '4.3.1';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event$2 = {
    SLIDE: "slide" + EVENT_KEY$2,
    SLID: "slid" + EVENT_KEY$2,
    KEYDOWN: "keydown" + EVENT_KEY$2,
    MOUSEENTER: "mouseenter" + EVENT_KEY$2,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$2,
    TOUCHSTART: "touchstart" + EVENT_KEY$2,
    TOUCHMOVE: "touchmove" + EVENT_KEY$2,
    TOUCHEND: "touchend" + EVENT_KEY$2,
    POINTERDOWN: "pointerdown" + EVENT_KEY$2,
    POINTERUP: "pointerup" + EVENT_KEY$2,
    DRAG_START: "dragstart" + EVENT_KEY$2,
    LOAD_DATA_API: "load" + EVENT_KEY$2 + DATA_API_KEY$2,
    CLICK_DATA_API: "click" + EVENT_KEY$2 + DATA_API_KEY$2
  };
  var ClassName$2 = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item',
    POINTER_EVENT: 'pointer-event'
  };
  var Selector$2 = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    ITEM_IMG: '.carousel-item img',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
  };
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(Selector$2.INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype;

    // Public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(Selector$2.NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event$2.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default, config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event$2.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(Event$2.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event$2.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(Selector$2.ITEM_IMG)).on(Event$2.DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(Event$2.POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(ClassName$2.POINTER_EVENT);
      } else {
        $(this._element).on(Event$2.TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(Event$2.TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(Event$2.TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;

        default:
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(Selector$2.ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(Selector$2.ACTIVE_ITEM));

      var slideEvent = $.Event(Event$2.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(Selector$2.ACTIVE));
        $(indicators).removeClass(ClassName$2.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName$2.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(Selector$2.ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName$2.LEFT;
        orderClassName = ClassName$2.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName$2.RIGHT;
        orderClassName = ClassName$2.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName$2.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event$2.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(ClassName$2.SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName$2.ACTIVE);
          $(activeElement).removeClass(ClassName$2.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(ClassName$2.ACTIVE);
        $(nextElement).addClass(ClassName$2.ACTIVE);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread({}, Default, $(this).data());

        if (typeof config === 'object') {
          _config = _objectSpread({}, _config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName$2.CAROUSEL)) {
        return;
      }

      var config = _objectSpread({}, $(target).data(), $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$2.CLICK_DATA_API, Selector$2.DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(Event$2.LOAD_DATA_API, function () {
    var carousels = [].slice.call(document.querySelectorAll(Selector$2.DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$3 = 'collapse';
  var VERSION$3 = '4.3.1';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event$3 = {
    SHOW: "show" + EVENT_KEY$3,
    SHOWN: "shown" + EVENT_KEY$3,
    HIDE: "hide" + EVENT_KEY$3,
    HIDDEN: "hidden" + EVENT_KEY$3,
    CLICK_DATA_API: "click" + EVENT_KEY$3 + DATA_API_KEY$3
  };
  var ClassName$3 = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector$3 = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(Selector$3.DATA_TOGGLE));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype;

    // Public
    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName$3.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(Selector$3.ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(ClassName$3.COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event$3.SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName$3.COLLAPSE).addClass(ClassName$3.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName$3.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).addClass(ClassName$3.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(Event$3.SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName$3.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event$3.HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(ClassName$3.COLLAPSING).removeClass(ClassName$3.COLLAPSE).removeClass(ClassName$3.SHOW);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(ClassName$3.SHOW)) {
              $(trigger).addClass(ClassName$3.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(ClassName$3.COLLAPSING).addClass(ClassName$3.COLLAPSE).trigger(Event$3.HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$1, config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(ClassName$3.SHOW);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(ClassName$3.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread({}, Default$1, $this.data(), typeof config === 'object' && config ? config : {});

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$3.CLICK_DATA_API, Selector$3.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.3.1';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event$4 = {
    HIDE: "hide" + EVENT_KEY$4,
    HIDDEN: "hidden" + EVENT_KEY$4,
    SHOW: "show" + EVENT_KEY$4,
    SHOWN: "shown" + EVENT_KEY$4,
    CLICK: "click" + EVENT_KEY$4,
    CLICK_DATA_API: "click" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY$4 + DATA_API_KEY$4,
    KEYUP_DATA_API: "keyup" + EVENT_KEY$4 + DATA_API_KEY$4
  };
  var ClassName$4 = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector$4 = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic'
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype;

    // Public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this._element);

      var isActive = $(this._menu).hasClass(ClassName$4.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);
      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(ClassName$4.POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(Selector$4.NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.show = function show() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || $(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event$4.SHOW, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.SHOWN, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(ClassName$4.DISABLED) || !$(this._menu).hasClass(ClassName$4.SHOW)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(Event$4.HIDE, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(this._menu).toggleClass(ClassName$4.SHOW);
      $(parent).toggleClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(Event$4.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, this.constructor.Default, $(this._element).data(), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(Selector$4.MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName$4.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName$4.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName$4.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($(this._menu).hasClass(ClassName$4.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread({}, data.offsets, _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        } // Disable Popper.js if we have a static display

      };

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return popperConfig;
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(Selector$4.DATA_TOGGLE));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(ClassName$4.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event$4.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');
        $(dropdownMenu).removeClass(ClassName$4.SHOW);
        $(parent).removeClass(ClassName$4.SHOW).trigger($.Event(Event$4.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector$4.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName$4.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(ClassName$4.SHOW);

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = parent.querySelector(Selector$4.DATA_TOGGLE);
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(Selector$4.VISIBLE_ITEMS));

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$4.KEYDOWN_DATA_API, Selector$4.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event$4.KEYDOWN_DATA_API, Selector$4.MENU, Dropdown._dataApiKeydownHandler).on(Event$4.CLICK_DATA_API + " " + Event$4.KEYUP_DATA_API, Dropdown._clearMenus).on(Event$4.CLICK_DATA_API, Selector$4.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event$4.CLICK_DATA_API, Selector$4.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$5 = 'modal';
  var VERSION$5 = '4.3.1';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event$5 = {
    HIDE: "hide" + EVENT_KEY$5,
    HIDDEN: "hidden" + EVENT_KEY$5,
    SHOW: "show" + EVENT_KEY$5,
    SHOWN: "shown" + EVENT_KEY$5,
    FOCUSIN: "focusin" + EVENT_KEY$5,
    RESIZE: "resize" + EVENT_KEY$5,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$5,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY$5,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY$5,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY$5,
    CLICK_DATA_API: "click" + EVENT_KEY$5 + DATA_API_KEY$5
  };
  var ClassName$5 = {
    SCROLLABLE: 'modal-dialog-scrollable',
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$5 = {
    DIALOG: '.modal-dialog',
    MODAL_BODY: '.modal-body',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(Selector$5.DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype;

    // Public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(ClassName$5.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event$5.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event$5.CLICK_DISMISS, Selector$5.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event$5.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event$5.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(Event$5.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(ClassName$5.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event$5.FOCUSIN);
      $(this._element).removeClass(ClassName$5.SHOW);
      $(this._element).off(Event$5.CLICK_DISMISS);
      $(this._dialog).off(Event$5.MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `Event.FOCUSIN` and `Event.CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `Event.CLICK_DATA_API` event that should remain
       */

      $(document).off(Event$5.FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$3, config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this3 = this;

      var transition = $(this._element).hasClass(ClassName$5.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(ClassName$5.SCROLLABLE)) {
        this._dialog.querySelector(Selector$5.MODAL_BODY).scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName$5.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event$5.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this3._config.focus) {
          _this3._element.focus();
        }

        _this3._isTransitioning = false;
        $(_this3._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this4 = this;

      $(document).off(Event$5.FOCUSIN) // Guard against infinite focus loop
      .on(Event$5.FOCUSIN, function (event) {
        if (document !== event.target && _this4._element !== event.target && $(_this4._element).has(event.target).length === 0) {
          _this4._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this5 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event$5.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this5.hide();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event$5.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $(window).on(Event$5.RESIZE, function (event) {
          return _this6.handleUpdate(event);
        });
      } else {
        $(window).off(Event$5.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this7 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName$5.OPEN);

        _this7._resetAdjustments();

        _this7._resetScrollbar();

        $(_this7._element).trigger(Event$5.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this8 = this;

      var animate = $(this._element).hasClass(ClassName$5.FADE) ? ClassName$5.FADE : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName$5.BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event$5.CLICK_DISMISS, function (event) {
          if (_this8._ignoreBackdropClick) {
            _this8._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this8._config.backdrop === 'static') {
            _this8._element.focus();
          } else {
            _this8.hide();
          }
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName$5.SHOW);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName$5.SHOW);

        var callbackRemove = function callbackRemove() {
          _this8._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(ClassName$5.FADE)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this9 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(Selector$5.STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(ClassName$5.OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(Selector$5.FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + Selector$5.STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName$5.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _objectSpread({}, Default$3, $(this).data(), typeof config === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$5.CLICK_DATA_API, Selector$5.DATA_TOGGLE, function (event) {
    var _this10 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event$5.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event$5.HIDDEN, function () {
        if ($(_this10).is(':visible')) {
          _this10.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
    /**
     * A pattern that recognizes a commonly useful subset of URLs that are safe.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
     */

  };
  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i, len);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.3.1';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object'
  };
  var AttachmentMap$1 = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event$6 = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var ClassName$6 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$6 = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      /**
       * Check for Popper dependency
       * Popper - https://popper.js.org
       */
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype;

    // Public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(ClassName$6.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper !== null) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName$6.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: this._getOffset(),
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector$6.ARROW
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            return _this._handlePopperPlacementChange(data);
          }
        });
        $(tip).addClass(ClassName$6.SHOW); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(ClassName$6.FADE)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName$6.SHOW); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if ($(this.tip).hasClass(ClassName$6.FADE)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(Selector$6.TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(ClassName$6.FADE + " " + ClassName$6.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getOffset = function _getOffset() {
      var _this3 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread({}, data.offsets, _this3.config.offset(data.offsets, _this3.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap$1[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this4 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this4.element).on(_this4.constructor.Event.CLICK, _this4.config.selector, function (event) {
            return _this4.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSEENTER : _this4.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this4.constructor.Event.MOUSELEAVE : _this4.constructor.Event.FOCUSOUT;
          $(_this4.element).on(eventIn, _this4.config.selector, function (event) {
            return _this4._enter(event);
          }).on(eventOut, _this4.config.selector, function (event) {
            return _this4._leave(event);
          });
        }
      });
      $(this.element).closest('.modal').on('hide.bs.modal', function () {
        if (_this4.element) {
          _this4.hide();
        }
      });

      if (this.config.selector) {
        this.config = _objectSpread({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName$6.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread({}, this.constructor.Default, dataAttributes, typeof config === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      var popperInstance = popperData.instance;
      this.tip = popperInstance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(ClassName$6.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$6;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$7 = 'popover';
  var VERSION$7 = '4.3.1';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _objectSpread({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _objectSpread({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });

  var ClassName$7 = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$7 = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event$7 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Popover =
  /*#__PURE__*/
  function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // Overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector$7.TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(Selector$7.CONTENT), content);
      $tip.removeClass(ClassName$7.FADE + " " + ClassName$7.SHOW);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$7;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.3.1';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event$8 = {
    ACTIVATE: "activate" + EVENT_KEY$8,
    SCROLL: "scroll" + EVENT_KEY$8,
    LOAD_DATA_API: "load" + EVENT_KEY$8 + DATA_API_KEY$6
  };
  var ClassName$8 = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector$8 = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var ScrollSpy =
  /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector$8.NAV_LINKS + "," + (this._config.target + " " + Selector$8.LIST_ITEMS + ",") + (this._config.target + " " + Selector$8.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(Event$8.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype;

    // Public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? OffsetMethod.OFFSET : OffsetMethod.POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$6, typeof config === 'object' && config ? config : {});

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      var offsetLength = this._offsets.length;

      for (var i = offsetLength; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(ClassName$8.DROPDOWN_ITEM)) {
        $link.closest(Selector$8.DROPDOWN).find(Selector$8.DROPDOWN_TOGGLE).addClass(ClassName$8.ACTIVE);
        $link.addClass(ClassName$8.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName$8.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_LINKS + ", " + Selector$8.LIST_ITEMS).addClass(ClassName$8.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector$8.NAV_LIST_GROUP).prev(Selector$8.NAV_ITEMS).children(Selector$8.NAV_LINKS).addClass(ClassName$8.ACTIVE);
      }

      $(this._scrollElement).trigger(Event$8.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(ClassName$8.ACTIVE);
      }).forEach(function (node) {
        return node.classList.remove(ClassName$8.ACTIVE);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event$8.LOAD_DATA_API, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(Selector$8.DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$9 = 'tab';
  var VERSION$9 = '4.3.1';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var Event$9 = {
    HIDE: "hide" + EVENT_KEY$9,
    HIDDEN: "hidden" + EVENT_KEY$9,
    SHOW: "show" + EVENT_KEY$9,
    SHOWN: "shown" + EVENT_KEY$9,
    CLICK_DATA_API: "click" + EVENT_KEY$9 + DATA_API_KEY$7
  };
  var ClassName$9 = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector$9 = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName$9.ACTIVE) || $(this._element).hasClass(ClassName$9.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(Selector$9.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? Selector$9.ACTIVE_UL : Selector$9.ACTIVE;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event$9.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(Event$9.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event$9.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(Event$9.SHOWN, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(Selector$9.ACTIVE_UL) : $(container).children(Selector$9.ACTIVE);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(ClassName$9.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(ClassName$9.SHOW).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(ClassName$9.ACTIVE);
        var dropdownChild = $(active.parentNode).find(Selector$9.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName$9.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(ClassName$9.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(ClassName$9.FADE)) {
        element.classList.add(ClassName$9.SHOW);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName$9.DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(Selector$9.DROPDOWN)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(Selector$9.DROPDOWN_TOGGLE));
          $(dropdownToggleList).addClass(ClassName$9.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event$9.CLICK_DATA_API, Selector$9.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };

  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME$a = 'toast';
  var VERSION$a = '4.3.1';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var Event$a = {
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY$a,
    HIDE: "hide" + EVENT_KEY$a,
    HIDDEN: "hidden" + EVENT_KEY$a,
    SHOW: "show" + EVENT_KEY$a,
    SHOWN: "shown" + EVENT_KEY$a
  };
  var ClassName$a = {
    FADE: 'fade',
    HIDE: 'hide',
    SHOW: 'show',
    SHOWING: 'showing'
  };
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var Selector$a = {
    DATA_DISMISS: '[data-dismiss="toast"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Toast =
  /*#__PURE__*/
  function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype;

    // Public
    _proto.show = function show() {
      var _this = this;

      $(this._element).trigger(Event$a.SHOW);

      if (this._config.animation) {
        this._element.classList.add(ClassName$a.FADE);
      }

      var complete = function complete() {
        _this._element.classList.remove(ClassName$a.SHOWING);

        _this._element.classList.add(ClassName$a.SHOW);

        $(_this._element).trigger(Event$a.SHOWN);

        if (_this._config.autohide) {
          _this.hide();
        }
      };

      this._element.classList.remove(ClassName$a.HIDE);

      this._element.classList.add(ClassName$a.SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide(withoutTimeout) {
      var _this2 = this;

      if (!this._element.classList.contains(ClassName$a.SHOW)) {
        return;
      }

      $(this._element).trigger(Event$a.HIDE);

      if (withoutTimeout) {
        this._close();
      } else {
        this._timeout = setTimeout(function () {
          _this2._close();
        }, this._config.delay);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(ClassName$a.SHOW)) {
        this._element.classList.remove(ClassName$a.SHOW);
      }

      $(this._element).off(Event$a.CLICK_DISMISS);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread({}, Default$7, $(this._element).data(), typeof config === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this3 = this;

      $(this._element).on(Event$a.CLICK_DISMISS, Selector$a.DATA_DISMISS, function () {
        return _this3.hide(true);
      });
    };

    _proto._close = function _close() {
      var _this4 = this;

      var complete = function complete() {
        _this4._element.classList.add(ClassName$a.HIDE);

        $(_this4._element).trigger(Event$a.HIDDEN);
      };

      this._element.classList.remove(ClassName$a.SHOW);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.3.1): index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  (function () {
    if (typeof $ === 'undefined') {
      throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
    }

    var version = $.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })();

  exports.Util = Util;
  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=bootstrap.js.map

/*
 * International Telephone Input v15.1.0
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */

// wrap in UMD
(function(factory) {
    var intlTelInput = factory(window, document);
    if (typeof module === "object" && module.exports) module.exports = intlTelInput; else window.intlTelInput = intlTelInput;
})(function(window, document, undefined) {
    "use strict";
    return function() {
        // Array of country objects for the flag dropdown.
        // Here is the criteria for the plugin to support a given country/territory
        // - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
        // - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
        // - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
        // - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml
        // Each country array has the following information:
        // [
        //    Country name,
        //    iso2 code,
        //    International dial code,
        //    Order (if >1 country with same dial code),
        //    Area codes
        // ]
        var allCountries = [ [ "Afghanistan (‫افغانستان‬‎)", "af", "93" ], [ "Albania (Shqipëri)", "al", "355" ], [ "Algeria (‫الجزائر‬‎)", "dz", "213" ], [ "American Samoa", "as", "1684" ], [ "Andorra", "ad", "376" ], [ "Angola", "ao", "244" ], [ "Anguilla", "ai", "1264" ], [ "Antigua and Barbuda", "ag", "1268" ], [ "Argentina", "ar", "54" ], [ "Armenia (Հայաստան)", "am", "374" ], [ "Aruba", "aw", "297" ], [ "Australia", "au", "61", 0 ], [ "Austria (Österreich)", "at", "43" ], [ "Azerbaijan (Azərbaycan)", "az", "994" ], [ "Bahamas", "bs", "1242" ], [ "Bahrain (‫البحرين‬‎)", "bh", "973" ], [ "Bangladesh (বাংলাদেশ)", "bd", "880" ], [ "Barbados", "bb", "1246" ], [ "Belarus (Беларусь)", "by", "375" ], [ "Belgium (België)", "be", "32" ], [ "Belize", "bz", "501" ], [ "Benin (Bénin)", "bj", "229" ], [ "Bermuda", "bm", "1441" ], [ "Bhutan (འབྲུག)", "bt", "975" ], [ "Bolivia", "bo", "591" ], [ "Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387" ], [ "Botswana", "bw", "267" ], [ "Brazil (Brasil)", "br", "55" ], [ "British Indian Ocean Territory", "io", "246" ], [ "British Virgin Islands", "vg", "1284" ], [ "Brunei", "bn", "673" ], [ "Bulgaria (България)", "bg", "359" ], [ "Burkina Faso", "bf", "226" ], [ "Burundi (Uburundi)", "bi", "257" ], [ "Cambodia (កម្ពុជា)", "kh", "855" ], [ "Cameroon (Cameroun)", "cm", "237" ], [ "Canada", "ca", "1", 1, [ "204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905" ] ], [ "Cape Verde (Kabu Verdi)", "cv", "238" ], [ "Caribbean Netherlands", "bq", "599", 1 ], [ "Cayman Islands", "ky", "1345" ], [ "Central African Republic (République centrafricaine)", "cf", "236" ], [ "Chad (Tchad)", "td", "235" ], [ "Chile", "cl", "56" ], [ "China (中国)", "cn", "86" ], [ "Christmas Island", "cx", "61", 2 ], [ "Cocos (Keeling) Islands", "cc", "61", 1 ], [ "Colombia", "co", "57" ], [ "Comoros (‫جزر القمر‬‎)", "km", "269" ], [ "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243" ], [ "Congo (Republic) (Congo-Brazzaville)", "cg", "242" ], [ "Cook Islands", "ck", "682" ], [ "Costa Rica", "cr", "506" ], [ "Côte d’Ivoire", "ci", "225" ], [ "Croatia (Hrvatska)", "hr", "385" ], [ "Cuba", "cu", "53" ], [ "Curaçao", "cw", "599", 0 ], [ "Cyprus (Κύπρος)", "cy", "357" ], [ "Czech Republic (Česká republika)", "cz", "420" ], [ "Denmark (Danmark)", "dk", "45" ], [ "Djibouti", "dj", "253" ], [ "Dominica", "dm", "1767" ], [ "Dominican Republic (República Dominicana)", "do", "1", 2, [ "809", "829", "849" ] ], [ "Ecuador", "ec", "593" ], [ "Egypt (‫مصر‬‎)", "eg", "20" ], [ "El Salvador", "sv", "503" ], [ "Equatorial Guinea (Guinea Ecuatorial)", "gq", "240" ], [ "Eritrea", "er", "291" ], [ "Estonia (Eesti)", "ee", "372" ], [ "Ethiopia", "et", "251" ], [ "Falkland Islands (Islas Malvinas)", "fk", "500" ], [ "Faroe Islands (Føroyar)", "fo", "298" ], [ "Fiji", "fj", "679" ], [ "Finland (Suomi)", "fi", "358", 0 ], [ "France", "fr", "33" ], [ "French Guiana (Guyane française)", "gf", "594" ], [ "French Polynesia (Polynésie française)", "pf", "689" ], [ "Gabon", "ga", "241" ], [ "Gambia", "gm", "220" ], [ "Georgia (საქართველო)", "ge", "995" ], [ "Germany (Deutschland)", "de", "49" ], [ "Ghana (Gaana)", "gh", "233" ], [ "Gibraltar", "gi", "350" ], [ "Greece (Ελλάδα)", "gr", "30" ], [ "Greenland (Kalaallit Nunaat)", "gl", "299" ], [ "Grenada", "gd", "1473" ], [ "Guadeloupe", "gp", "590", 0 ], [ "Guam", "gu", "1671" ], [ "Guatemala", "gt", "502" ], [ "Guernsey", "gg", "44", 1 ], [ "Guinea (Guinée)", "gn", "224" ], [ "Guinea-Bissau (Guiné Bissau)", "gw", "245" ], [ "Guyana", "gy", "592" ], [ "Haiti", "ht", "509" ], [ "Honduras", "hn", "504" ], [ "Hong Kong (香港)", "hk", "852" ], [ "Hungary (Magyarország)", "hu", "36" ], [ "Iceland (Ísland)", "is", "354" ], [ "India (भारत)", "in", "91" ], [ "Indonesia", "id", "62" ], [ "Iran (‫ایران‬‎)", "ir", "98" ], [ "Iraq (‫العراق‬‎)", "iq", "964" ], [ "Ireland", "ie", "353" ], [ "Isle of Man", "im", "44", 2 ], [ "Israel (‫ישראל‬‎)", "il", "972" ], [ "Italy (Italia)", "it", "39", 0 ], [ "Jamaica", "jm", "1", 4, [ "876", "658" ] ], [ "Japan (日本)", "jp", "81" ], [ "Jersey", "je", "44", 3 ], [ "Jordan (‫الأردن‬‎)", "jo", "962" ], [ "Kazakhstan (Казахстан)", "kz", "7", 1 ], [ "Kenya", "ke", "254" ], [ "Kiribati", "ki", "686" ], [ "Kosovo", "xk", "383" ], [ "Kuwait (‫الكويت‬‎)", "kw", "965" ], [ "Kyrgyzstan (Кыргызстан)", "kg", "996" ], [ "Laos (ລາວ)", "la", "856" ], [ "Latvia (Latvija)", "lv", "371" ], [ "Lebanon (‫لبنان‬‎)", "lb", "961" ], [ "Lesotho", "ls", "266" ], [ "Liberia", "lr", "231" ], [ "Libya (‫ليبيا‬‎)", "ly", "218" ], [ "Liechtenstein", "li", "423" ], [ "Lithuania (Lietuva)", "lt", "370" ], [ "Luxembourg", "lu", "352" ], [ "Macau (澳門)", "mo", "853" ], [ "Macedonia (FYROM) (Македонија)", "mk", "389" ], [ "Madagascar (Madagasikara)", "mg", "261" ], [ "Malawi", "mw", "265" ], [ "Malaysia", "my", "60" ], [ "Maldives", "mv", "960" ], [ "Mali", "ml", "223" ], [ "Malta", "mt", "356" ], [ "Marshall Islands", "mh", "692" ], [ "Martinique", "mq", "596" ], [ "Mauritania (‫موريتانيا‬‎)", "mr", "222" ], [ "Mauritius (Moris)", "mu", "230" ], [ "Mayotte", "yt", "262", 1 ], [ "Mexico (México)", "mx", "52" ], [ "Micronesia", "fm", "691" ], [ "Moldova (Republica Moldova)", "md", "373" ], [ "Monaco", "mc", "377" ], [ "Mongolia (Монгол)", "mn", "976" ], [ "Montenegro (Crna Gora)", "me", "382" ], [ "Montserrat", "ms", "1664" ], [ "Morocco (‫المغرب‬‎)", "ma", "212", 0 ], [ "Mozambique (Moçambique)", "mz", "258" ], [ "Myanmar (Burma) (မြန်မာ)", "mm", "95" ], [ "Namibia (Namibië)", "na", "264" ], [ "Nauru", "nr", "674" ], [ "Nepal (नेपाल)", "np", "977" ], [ "Netherlands (Nederland)", "nl", "31" ], [ "New Caledonia (Nouvelle-Calédonie)", "nc", "687" ], [ "New Zealand", "nz", "64" ], [ "Nicaragua", "ni", "505" ], [ "Niger (Nijar)", "ne", "227" ], [ "Nigeria", "ng", "234" ], [ "Niue", "nu", "683" ], [ "Norfolk Island", "nf", "672" ], [ "North Korea (조선 민주주의 인민 공화국)", "kp", "850" ], [ "Northern Mariana Islands", "mp", "1670" ], [ "Norway (Norge)", "no", "47", 0 ], [ "Oman (‫عُمان‬‎)", "om", "968" ], [ "Pakistan (‫پاکستان‬‎)", "pk", "92" ], [ "Palau", "pw", "680" ], [ "Palestine (‫فلسطين‬‎)", "ps", "970" ], [ "Panama (Panamá)", "pa", "507" ], [ "Papua New Guinea", "pg", "675" ], [ "Paraguay", "py", "595" ], [ "Peru (Perú)", "pe", "51" ], [ "Philippines", "ph", "63" ], [ "Poland (Polska)", "pl", "48" ], [ "Portugal", "pt", "351" ], [ "Puerto Rico", "pr", "1", 3, [ "787", "939" ] ], [ "Qatar (‫قطر‬‎)", "qa", "974" ], [ "Réunion (La Réunion)", "re", "262", 0 ], [ "Romania (România)", "ro", "40" ], [ "Russia (Россия)", "ru", "7", 0 ], [ "Rwanda", "rw", "250" ], [ "Saint Barthélemy", "bl", "590", 1 ], [ "Saint Helena", "sh", "290" ], [ "Saint Kitts and Nevis", "kn", "1869" ], [ "Saint Lucia", "lc", "1758" ], [ "Saint Martin (Saint-Martin (partie française))", "mf", "590", 2 ], [ "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508" ], [ "Saint Vincent and the Grenadines", "vc", "1784" ], [ "Samoa", "ws", "685" ], [ "San Marino", "sm", "378" ], [ "São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239" ], [ "Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966" ], [ "Senegal (Sénégal)", "sn", "221" ], [ "Serbia (Србија)", "rs", "381" ], [ "Seychelles", "sc", "248" ], [ "Sierra Leone", "sl", "232" ], [ "Singapore", "sg", "65" ], [ "Sint Maarten", "sx", "1721" ], [ "Slovakia (Slovensko)", "sk", "421" ], [ "Slovenia (Slovenija)", "si", "386" ], [ "Solomon Islands", "sb", "677" ], [ "Somalia (Soomaaliya)", "so", "252" ], [ "South Africa", "za", "27" ], [ "South Korea (대한민국)", "kr", "82" ], [ "South Sudan (‫جنوب السودان‬‎)", "ss", "211" ], [ "Spain (España)", "es", "34" ], [ "Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94" ], [ "Sudan (‫السودان‬‎)", "sd", "249" ], [ "Suriname", "sr", "597" ], [ "Svalbard and Jan Mayen", "sj", "47", 1 ], [ "Swaziland", "sz", "268" ], [ "Sweden (Sverige)", "se", "46" ], [ "Switzerland (Schweiz)", "ch", "41" ], [ "Syria (‫سوريا‬‎)", "sy", "963" ], [ "Taiwan (台灣)", "tw", "886" ], [ "Tajikistan", "tj", "992" ], [ "Tanzania", "tz", "255" ], [ "Thailand (ไทย)", "th", "66" ], [ "Timor-Leste", "tl", "670" ], [ "Togo", "tg", "228" ], [ "Tokelau", "tk", "690" ], [ "Tonga", "to", "676" ], [ "Trinidad and Tobago", "tt", "1868" ], [ "Tunisia (‫تونس‬‎)", "tn", "216" ], [ "Turkey (Türkiye)", "tr", "90" ], [ "Turkmenistan", "tm", "993" ], [ "Turks and Caicos Islands", "tc", "1649" ], [ "Tuvalu", "tv", "688" ], [ "U.S. Virgin Islands", "vi", "1340" ], [ "Uganda", "ug", "256" ], [ "Ukraine (Україна)", "ua", "380" ], [ "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971" ], [ "United Kingdom", "gb", "44", 0 ], [ "United States", "us", "1", 0 ], [ "Uruguay", "uy", "598" ], [ "Uzbekistan (Oʻzbekiston)", "uz", "998" ], [ "Vanuatu", "vu", "678" ], [ "Vatican City (Città del Vaticano)", "va", "39", 1 ], [ "Venezuela", "ve", "58" ], [ "Vietnam (Việt Nam)", "vn", "84" ], [ "Wallis and Futuna (Wallis-et-Futuna)", "wf", "681" ], [ "Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1 ], [ "Yemen (‫اليمن‬‎)", "ye", "967" ], [ "Zambia", "zm", "260" ], [ "Zimbabwe", "zw", "263" ], [ "Åland Islands", "ax", "358", 1 ] ];
        // loop over all of the countries above, restructuring the data to be objects with named keys
        for (var i = 0; i < allCountries.length; i++) {
            var c = allCountries[i];
            allCountries[i] = {
                name: c[0],
                iso2: c[1],
                dialCode: c[2],
                priority: c[3] || 0,
                areaCodes: c[4] || null
            };
        }
        "use strict";
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
        }
        window.intlTelInputGlobals = {
            getInstance: function getInstance(input) {
                var id = input.getAttribute("data-intl-tel-input-id");
                return window.intlTelInputGlobals.instances[id];
            },
            instances: {}
        };
        // these vars persist through all instances of the plugin
        var id = 0;
        var defaults = {
            // whether or not to allow the dropdown
            allowDropdown: true,
            // if there is just a dial code in the input: remove it on blur
            autoHideDialCode: true,
            // add a placeholder in the input with an example number for the selected country
            autoPlaceholder: "polite",
            // modify the parentClass
            customContainer: "",
            // modify the auto placeholder
            customPlaceholder: null,
            // append menu to specified element
            dropdownContainer: null,
            // don't display these countries
            excludeCountries: [],
            // format the input value during initialisation and on setNumber
            formatOnDisplay: true,
            // geoIp lookup function
            geoIpLookup: null,
            // inject a hidden input with this name, and on submit, populate it with the result of getNumber
            hiddenInput: "",
            // initial country
            initialCountry: "",
            // localized country names e.g. { 'de': 'Deutschland' }
            localizedCountries: null,
            // don't insert international dial codes
            nationalMode: true,
            // display only these countries
            onlyCountries: [],
            // number type to use for placeholders
            placeholderNumberType: "MOBILE",
            // the countries at the top of the list. defaults to united states and united kingdom
            preferredCountries: [ "us", "gb" ],
            // display the country dial code next to the selected flag so it's not part of the typed number
            separateDialCode: false,
            // specify the path to the libphonenumber script to enable validation/formatting
            utilsScript: ""
        };
        // https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes#Non-geographic_area_codes
        var regionlessNanpNumbers = [ "800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889" ];
        // keep track of if the window.load event has fired as impossible to check after the fact
        window.addEventListener("load", function() {
            // UPDATE: use a public static field so we can fudge it in the tests
            window.intlTelInputGlobals.windowLoaded = true;
        });
        // utility function to iterate over an object. can't use Object.entries or native forEach because
        // of IE11
        var forEachProp = function forEachProp(obj, callback) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
                callback(keys[i], obj[keys[i]]);
            }
        };
        // run a method on each instance of the plugin
        var forEachInstance = function forEachInstance(method) {
            forEachProp(window.intlTelInputGlobals.instances, function(key) {
                window.intlTelInputGlobals.instances[key][method]();
            });
        };
        // this is our plugin class that we will create an instance of
        // eslint-disable-next-line no-unused-vars
        var Iti = /*#__PURE__*/
        function() {
            function Iti(input, options) {
                var _this = this;
                _classCallCheck(this, Iti);
                this.id = id++;
                this.telInput = input;
                this.activeItem = null;
                this.highlightedItem = null;
                // process specified options / defaults
                // alternative to Object.assign, which isn't supported by IE11
                var customOptions = options || {};
                this.options = {};
                forEachProp(defaults, function(key, value) {
                    _this.options[key] = customOptions.hasOwnProperty(key) ? customOptions[key] : value;
                });
                this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
            }
            _createClass(Iti, [ {
                key: "_init",
                value: function _init() {
                    var _this2 = this;
                    // if in nationalMode, disable options relating to dial codes
                    if (this.options.nationalMode) this.options.autoHideDialCode = false;
                    // if separateDialCode then doesn't make sense to A) insert dial code into input
                    // (autoHideDialCode), and B) display national numbers (because we're displaying the country
                    // dial code next to them)
                    if (this.options.separateDialCode) {
                        this.options.autoHideDialCode = this.options.nationalMode = false;
                    }
                    // we cannot just test screen size as some smartphones/website meta tags will report desktop
                    // resolutions
                    // Note: for some reason jasmine breaks if you put this in the main Plugin function with the
                    // rest of these declarations
                    // Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
                    this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    if (this.isMobile) {
                        // trigger the mobile dropdown css
                        document.body.classList.add("iti-mobile");
                        // on mobile, we want a full screen dropdown, so we must append it to the body
                        if (!this.options.dropdownContainer) this.options.dropdownContainer = document.body;
                    }
                    // these promises get resolved when their individual requests complete
                    // this way the dev can do something like iti.promise.then(...) to know when all requests are
                    // complete
                    if (typeof Promise !== "undefined") {
                        var autoCountryPromise = new Promise(function(resolve, reject) {
                            _this2.resolveAutoCountryPromise = resolve;
                            _this2.rejectAutoCountryPromise = reject;
                        });
                        var utilsScriptPromise = new Promise(function(resolve, reject) {
                            _this2.resolveUtilsScriptPromise = resolve;
                            _this2.rejectUtilsScriptPromise = reject;
                        });
                        this.promise = Promise.all([ autoCountryPromise, utilsScriptPromise ]);
                    } else {
                        // prevent errors when Promise doesn't exist
                        this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function() {};
                        this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function() {};
                    }
                    // in various situations there could be no country selected initially, but we need to be able
                    // to assume this variable exists
                    this.selectedCountryData = {};
                    // process all the data: onlyCountries, excludeCountries, preferredCountries etc
                    this._processCountryData();
                    // generate the markup
                    this._generateMarkup();
                    // set the initial state of the input value and the selected flag
                    this._setInitialState();
                    // start all of the event listeners: autoHideDialCode, input keydown, selectedFlag click
                    this._initListeners();
                    // utils script, and auto country
                    this._initRequests();
                }
            }, {
                key: "_processCountryData",
                value: function _processCountryData() {
                    // process onlyCountries or excludeCountries array if present
                    this._processAllCountries();
                    // process the countryCodes map
                    this._processCountryCodes();
                    // process the preferredCountries
                    this._processPreferredCountries();
                    // translate countries according to localizedCountries option
                    if (this.options.localizedCountries) this._translateCountriesByLocale();
                    // sort countries by name
                    if (this.options.onlyCountries.length || this.options.localizedCountries) {
                        this.countries.sort(this._countryNameSort);
                    }
                }
            }, {
                key: "_addCountryCode",
                value: function _addCountryCode(iso2, dialCode, priority) {
                    if (!this.countryCodes.hasOwnProperty(dialCode)) {
                        this.countryCodes[dialCode] = [];
                    }
                    var index = priority || 0;
                    this.countryCodes[dialCode][index] = iso2;
                }
            }, {
                key: "_processAllCountries",
                value: function _processAllCountries() {
                    if (this.options.onlyCountries.length) {
                        var lowerCaseOnlyCountries = this.options.onlyCountries.map(function(country) {
                            return country.toLowerCase();
                        });
                        this.countries = allCountries.filter(function(country) {
                            return lowerCaseOnlyCountries.indexOf(country.iso2) > -1;
                        });
                    } else if (this.options.excludeCountries.length) {
                        var lowerCaseExcludeCountries = this.options.excludeCountries.map(function(country) {
                            return country.toLowerCase();
                        });
                        this.countries = allCountries.filter(function(country) {
                            return lowerCaseExcludeCountries.indexOf(country.iso2) === -1;
                        });
                    } else {
                        this.countries = allCountries;
                    }
                }
            }, {
                key: "_translateCountriesByLocale",
                value: function _translateCountriesByLocale() {
                    for (var i = 0; i < this.countries.length; i++) {
                        var iso = this.countries[i].iso2.toLowerCase();
                        if (this.options.localizedCountries.hasOwnProperty(iso)) {
                            this.countries[i].name = this.options.localizedCountries[iso];
                        }
                    }
                }
            }, {
                key: "_countryNameSort",
                value: function _countryNameSort(a, b) {
                    return a.name.localeCompare(b.name);
                }
            }, {
                key: "_processCountryCodes",
                value: function _processCountryCodes() {
                    this.countryCodes = {};
                    for (var i = 0; i < this.countries.length; i++) {
                        var c = this.countries[i];
                        this._addCountryCode(c.iso2, c.dialCode, c.priority);
                        // area codes
                        if (c.areaCodes) {
                            for (var j = 0; j < c.areaCodes.length; j++) {
                                // full dial code is country code + dial code
                                this._addCountryCode(c.iso2, c.dialCode + c.areaCodes[j]);
                            }
                        }
                    }
                }
            }, {
                key: "_processPreferredCountries",
                value: function _processPreferredCountries() {
                    this.preferredCountries = [];
                    for (var i = 0; i < this.options.preferredCountries.length; i++) {
                        var countryCode = this.options.preferredCountries[i].toLowerCase();
                        var countryData = this._getCountryData(countryCode, false, true);
                        if (countryData) this.preferredCountries.push(countryData);
                    }
                }
            }, {
                key: "_createEl",
                value: function _createEl(name, attrs, container) {
                    var el = document.createElement(name);
                    if (attrs) forEachProp(attrs, function(key, value) {
                        return el.setAttribute(key, value);
                    });
                    if (container) container.appendChild(el);
                    return el;
                }
            }, {
                key: "_generateMarkup",
                value: function _generateMarkup() {
                    // prevent autocomplete as there's no safe, cross-browser event we can react to, so it can
                    // easily put the plugin in an inconsistent state e.g. the wrong flag selected for the
                    // autocompleted number, which on submit could mean wrong number is saved (esp in nationalMode)
                    this.telInput.setAttribute("autocomplete", "off");
                    // containers (mostly for positioning)
                    var parentClass = "intl-tel-input";
                    if (this.options.allowDropdown) parentClass += " allow-dropdown";
                    if (this.options.separateDialCode) parentClass += " separate-dial-code";
                    if (this.options.customContainer) {
                        parentClass += " ";
                        parentClass += this.options.customContainer;
                    }
                    var wrapper = this._createEl("div", {
                        "class": parentClass
                    });
                    this.telInput.parentNode.insertBefore(wrapper, this.telInput);
                    this.flagsContainer = this._createEl("div", {
                        "class": "flag-container"
                    }, wrapper);
                    wrapper.appendChild(this.telInput);
                    // selected flag (displayed to left of input)
                    this.selectedFlag = this._createEl("div", {
                        "class": "selected-flag",
                        role: "combobox",
                        "aria-owns": "country-listbox"
                    }, this.flagsContainer);
                    this.selectedFlagInner = this._createEl("div", {
                        "class": "iti-flag"
                    }, this.selectedFlag);
                    if (this.options.separateDialCode) {
                        this.selectedDialCode = this._createEl("div", {
                            "class": "selected-dial-code"
                        }, this.selectedFlag);
                    }
                    if (this.options.allowDropdown) {
                        // make element focusable and tab navigable
                        this.selectedFlag.setAttribute("tabindex", "0");
                        this.dropdownArrow = this._createEl("div", {
                            "class": "iti-arrow"
                        }, this.selectedFlag);
                        // country dropdown: preferred countries, then divider, then all countries
                        this.countryList = this._createEl("ul", {
                            "class": "country-list hide",
                            id: "country-listbox",
                            "aria-expanded": "false",
                            role: "listbox"
                        });
                        if (this.preferredCountries.length) {
                            this._appendListItems(this.preferredCountries, "preferred");
                            this._createEl("li", {
                                "class": "divider",
                                role: "separator",
                                "aria-disabled": "true"
                            }, this.countryList);
                        }
                        this._appendListItems(this.countries, "standard");
                        // create dropdownContainer markup
                        if (this.options.dropdownContainer) {
                            this.dropdown = this._createEl("div", {
                                "class": "intl-tel-input iti-container"
                            });
                            this.dropdown.appendChild(this.countryList);
                        } else {
                            this.flagsContainer.appendChild(this.countryList);
                        }
                    }
                    if (this.options.hiddenInput) {
                        var hiddenInputName = this.options.hiddenInput;
                        var name = this.telInput.getAttribute("name");
                        if (name) {
                            var i = name.lastIndexOf("[");
                            // if input name contains square brackets, then give the hidden input the same name,
                            // replacing the contents of the last set of brackets with the given hiddenInput name
                            if (i !== -1) hiddenInputName = "".concat(name.substr(0, i), "[").concat(hiddenInputName, "]");
                        }
                        this.hiddenInput = this._createEl("input", {
                            type: "hidden",
                            name: hiddenInputName
                        });
                        wrapper.appendChild(this.hiddenInput);
                    }
                }
            }, {
                key: "_appendListItems",
                value: function _appendListItems(countries, className) {
                    // we create so many DOM elements, it is faster to build a temp string
                    // and then add everything to the DOM in one go at the end
                    var tmp = "";
                    // for each country
                    for (var i = 0; i < countries.length; i++) {
                        var c = countries[i];
                        // open the list item
                        tmp += "<li class='country ".concat(className, "' tabIndex='-1' id='iti-item-").concat(c.iso2, "' role='option' data-dial-code='").concat(c.dialCode, "' data-country-code='").concat(c.iso2, "'>");
                        // add the flag
                        tmp += "<div class='flag-box'><div class='iti-flag ".concat(c.iso2, "'></div></div>");
                        // and the country name and dial code
                        tmp += "<span class='country-name'>".concat(c.name, "</span>");
                        tmp += "<span class='dial-code'>+".concat(c.dialCode, "</span>");
                        // close the list item
                        tmp += "</li>";
                    }
                    this.countryList.insertAdjacentHTML("beforeend", tmp);
                }
            }, {
                key: "_setInitialState",
                value: function _setInitialState() {
                    var val = this.telInput.value;
                    var dialCode = this._getDialCode(val);
                    var isRegionlessNanp = this._isRegionlessNanp(val);
                    var _this$options = this.options, initialCountry = _this$options.initialCountry, nationalMode = _this$options.nationalMode, autoHideDialCode = _this$options.autoHideDialCode, separateDialCode = _this$options.separateDialCode;
                    // if we already have a dial code, and it's not a regionlessNanp, we can go ahead and set the
                    // flag, else fall back to the default country
                    if (dialCode && !isRegionlessNanp) {
                        this._updateFlagFromNumber(val);
                    } else if (initialCountry !== "auto") {
                        // see if we should select a flag
                        if (initialCountry) {
                            this._setFlag(initialCountry.toLowerCase());
                        } else {
                            if (dialCode && isRegionlessNanp) {
                                // has intl dial code, is regionless nanp, and no initialCountry, so default to US
                                this._setFlag("us");
                            } else {
                                // no dial code and no initialCountry, so default to first in list
                                this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2;
                                if (!val) {
                                    this._setFlag(this.defaultCountry);
                                }
                            }
                        }
                        // if empty and no nationalMode and no autoHideDialCode then insert the default dial code
                        if (!val && !nationalMode && !autoHideDialCode && !separateDialCode) {
                            this.telInput.value = "+".concat(this.selectedCountryData.dialCode);
                        }
                    }
                    // NOTE: if initialCountry is set to auto, that will be handled separately
                    // format - note this wont be run after _updateDialCode as that's only called if no val
                    if (val) this._updateValFromNumber(val);
                }
            }, {
                key: "_initListeners",
                value: function _initListeners() {
                    this._initKeyListeners();
                    if (this.options.autoHideDialCode) this._initBlurListeners();
                    if (this.options.allowDropdown) this._initDropdownListeners();
                    if (this.hiddenInput) this._initHiddenInputListener();
                }
            }, {
                key: "_initHiddenInputListener",
                value: function _initHiddenInputListener() {
                    var _this3 = this;
                    this._handleHiddenInputSubmit = function() {
                        _this3.hiddenInput.value = _this3.getNumber();
                    };
                    if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
                }
            }, {
                key: "_getClosestLabel",
                value: function _getClosestLabel() {
                    var el = this.telInput;
                    while (el && el.tagName !== "LABEL") {
                        el = el.parentNode;
                    }
                    return el;
                }
            }, {
                key: "_initDropdownListeners",
                value: function _initDropdownListeners() {
                    var _this4 = this;
                    // hack for input nested inside label (which is valid markup): clicking the selected-flag to
                    // open the dropdown would then automatically trigger a 2nd click on the input which would
                    // close it again
                    this._handleLabelClick = function(e) {
                        // if the dropdown is closed, then focus the input, else ignore the click
                        if (_this4.countryList.classList.contains("hide")) _this4.telInput.focus(); else e.preventDefault();
                    };
                    var label = this._getClosestLabel();
                    if (label) label.addEventListener("click", this._handleLabelClick);
                    // toggle country dropdown on click
                    this._handleClickSelectedFlag = function() {
                        // only intercept this event if we're opening the dropdown
                        // else let it bubble up to the top ("click-off-to-close" listener)
                        // we cannot just stopPropagation as it may be needed to close another instance
                        if (_this4.countryList.classList.contains("hide") && !_this4.telInput.disabled && !_this4.telInput.readOnly) {
                            _this4._showDropdown();
                        }
                    };
                    this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag);
                    // open dropdown list if currently focused
                    this._handleFlagsContainerKeydown = function(e) {
                        var isDropdownHidden = _this4.countryList.classList.contains("hide");
                        if (isDropdownHidden && [ "ArrowUp", "ArrowDown", " ", "Enter" ].indexOf(e.key) !== -1) {
                            // prevent form from being submitted if "ENTER" was pressed
                            e.preventDefault();
                            // prevent event from being handled again by document
                            e.stopPropagation();
                            _this4._showDropdown();
                        }
                        // allow navigation from dropdown to input on TAB
                        if (e.key === "Tab") _this4._closeDropdown();
                    };
                    this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
                }
            }, {
                key: "_initRequests",
                value: function _initRequests() {
                    var _this5 = this;
                    // if the user has specified the path to the utils script, fetch it on window.load, else resolve
                    if (this.options.utilsScript && !window.intlTelInputUtils) {
                        // if the plugin is being initialised after the window.load event has already been fired
                        if (window.intlTelInputGlobals.windowLoaded) {
                            window.intlTelInputGlobals.loadUtils(this.options.utilsScript);
                        } else {
                            // wait until the load event so we don't block any other requests e.g. the flags image
                            window.addEventListener("load", function() {
                                window.intlTelInputGlobals.loadUtils(_this5.options.utilsScript);
                            });
                        }
                    } else this.resolveUtilsScriptPromise();
                    if (this.options.initialCountry === "auto") this._loadAutoCountry(); else this.resolveAutoCountryPromise();
                }
            }, {
                key: "_loadAutoCountry",
                value: function _loadAutoCountry() {
                    // 3 options:
                    // 1) already loaded (we're done)
                    // 2) not already started loading (start)
                    // 3) already started loading (do nothing - just wait for loading callback to fire)
                    if (window.intlTelInputGlobals.autoCountry) {
                        this.handleAutoCountry();
                    } else if (!window.intlTelInputGlobals.startedLoadingAutoCountry) {
                        // don't do this twice!
                        window.intlTelInputGlobals.startedLoadingAutoCountry = true;
                        if (typeof this.options.geoIpLookup === "function") {
                            this.options.geoIpLookup(function(countryCode) {
                                window.intlTelInputGlobals.autoCountry = countryCode.toLowerCase();
                                // tell all instances the auto country is ready
                                // TODO: this should just be the current instances
                                // UPDATE: use setTimeout in case their geoIpLookup function calls this callback straight
                                // away (e.g. if they have already done the geo ip lookup somewhere else). Using
                                // setTimeout means that the current thread of execution will finish before executing
                                // this, which allows the plugin to finish initialising.
                                setTimeout(function() {
                                    return forEachInstance("handleAutoCountry");
                                });
                            }, function() {
                                return forEachInstance("rejectAutoCountryPromise");
                            });
                        }
                    }
                }
            }, {
                key: "_initKeyListeners",
                value: function _initKeyListeners() {
                    var _this6 = this;
                    // update flag on keyup
                    this._handleKeyupEvent = function() {
                        if (_this6._updateFlagFromNumber(_this6.telInput.value)) {
                            _this6._triggerCountryChange();
                        }
                    };
                    this.telInput.addEventListener("keyup", this._handleKeyupEvent);
                    // update flag on cut/paste events (now supported in all major browsers)
                    this._handleClipboardEvent = function() {
                        // hack because "paste" event is fired before input is updated
                        setTimeout(_this6._handleKeyupEvent);
                    };
                    this.telInput.addEventListener("cut", this._handleClipboardEvent);
                    this.telInput.addEventListener("paste", this._handleClipboardEvent);
                }
            }, {
                key: "_cap",
                value: function _cap(number) {
                    var max = this.telInput.getAttribute("maxlength");
                    return max && number.length > max ? number.substr(0, max) : number;
                }
            }, {
                key: "_initBlurListeners",
                value: function _initBlurListeners() {
                    var _this7 = this;
                    // on blur or form submit: if just a dial code then remove it
                    this._handleSubmitOrBlurEvent = function() {
                        _this7._removeEmptyDialCode();
                    };
                    if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent);
                    this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
                }
            }, {
                key: "_removeEmptyDialCode",
                value: function _removeEmptyDialCode() {
                    if (this.telInput.value.charAt(0) === "+") {
                        var numeric = this._getNumeric(this.telInput.value);
                        // if just a plus, or if just a dial code
                        if (!numeric || this.selectedCountryData.dialCode === numeric) {
                            this.telInput.value = "";
                        }
                    }
                }
            }, {
                key: "_getNumeric",
                value: function _getNumeric(s) {
                    return s.replace(/\D/g, "");
                }
            }, {
                key: "_trigger",
                value: function _trigger(name) {
                    // have to use old school document.createEvent as IE11 doesn't support `new Event()` syntax
                    var e = document.createEvent("Event");
                    e.initEvent(name, true, true);
                    // can bubble, and is cancellable
                    this.telInput.dispatchEvent(e);
                }
            }, {
                key: "_showDropdown",
                value: function _showDropdown() {
                    this.countryList.classList.remove("hide");
                    this.countryList.setAttribute("aria-expanded", "true");
                    this._setDropdownPosition();
                    // update highlighting and scroll to active list item
                    if (this.activeItem) {
                        this._highlightListItem(this.activeItem, false);
                        this._scrollTo(this.activeItem, true);
                    }
                    // bind all the dropdown-related listeners: mouseover, click, click-off, keydown
                    this._bindDropdownListeners();
                    // update the arrow
                    this.dropdownArrow.classList.add("up");
                    this._trigger("open:countrydropdown");
                }
            }, {
                key: "_toggleClass",
                value: function _toggleClass(el, className, shouldHaveClass) {
                    if (shouldHaveClass && !el.classList.contains(className)) el.classList.add(className); else if (!shouldHaveClass && el.classList.contains(className)) el.classList.remove(className);
                }
            }, {
                key: "_setDropdownPosition",
                value: function _setDropdownPosition() {
                    var _this8 = this;
                    if (this.options.dropdownContainer) {
                        this.options.dropdownContainer.appendChild(this.dropdown);
                    }
                    if (!this.isMobile) {
                        var pos = this.telInput.getBoundingClientRect();
                        // windowTop from https://stackoverflow.com/a/14384091/217866
                        var windowTop = window.pageYOffset || document.documentElement.scrollTop;
                        var inputTop = pos.top + windowTop;
                        var dropdownHeight = this.countryList.offsetHeight;
                        // dropdownFitsBelow = (dropdownBottom < windowBottom)
                        var dropdownFitsBelow = inputTop + this.telInput.offsetHeight + dropdownHeight < windowTop + window.innerHeight;
                        var dropdownFitsAbove = inputTop - dropdownHeight > windowTop;
                        // by default, the dropdown will be below the input. If we want to position it above the
                        // input, we add the dropup class.
                        this._toggleClass(this.countryList, "dropup", !dropdownFitsBelow && dropdownFitsAbove);
                        // if dropdownContainer is enabled, calculate postion
                        if (this.options.dropdownContainer) {
                            // by default the dropdown will be directly over the input because it's not in the flow.
                            // If we want to position it below, we need to add some extra top value.
                            var extraTop = !dropdownFitsBelow && dropdownFitsAbove ? 0 : this.telInput.offsetHeight;
                            // calculate placement
                            this.dropdown.style.top = "".concat(inputTop + extraTop, "px");
                            this.dropdown.style.left = "".concat(pos.left + document.body.scrollLeft, "px");
                            // close menu on window scroll
                            this._handleWindowScroll = function() {
                                return _this8._closeDropdown();
                            };
                            window.addEventListener("scroll", this._handleWindowScroll);
                        }
                    }
                }
            }, {
                key: "_getClosestListItem",
                value: function _getClosestListItem(target) {
                    var el = target;
                    while (el && el !== this.countryList && !el.classList.contains("country")) {
                        el = el.parentNode;
                    }
                    // if we reached the countryList element, then return null
                    return el === this.countryList ? null : el;
                }
            }, {
                key: "_bindDropdownListeners",
                value: function _bindDropdownListeners() {
                    var _this9 = this;
                    // when mouse over a list item, just highlight that one
                    // we add the class "highlight", so if they hit "enter" we know which one to select
                    this._handleMouseoverCountryList = function(e) {
                        // handle event delegation, as we're listening for this event on the countryList
                        var listItem = _this9._getClosestListItem(e.target);
                        if (listItem) _this9._highlightListItem(listItem, false);
                    };
                    this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList);
                    // listen for country selection
                    this._handleClickCountryList = function(e) {
                        var listItem = _this9._getClosestListItem(e.target);
                        if (listItem) _this9._selectListItem(listItem);
                    };
                    this.countryList.addEventListener("click", this._handleClickCountryList);
                    // click off to close
                    // (except when this initial opening click is bubbling up)
                    // we cannot just stopPropagation as it may be needed to close another instance
                    var isOpening = true;
                    this._handleClickOffToClose = function() {
                        if (!isOpening) _this9._closeDropdown();
                        isOpening = false;
                    };
                    document.documentElement.addEventListener("click", this._handleClickOffToClose);
                    // listen for up/down scrolling, enter to select, or letters to jump to country name.
                    // use keydown as keypress doesn't fire for non-char keys and we want to catch if they
                    // just hit down and hold it to scroll down (no keyup event).
                    // listen on the document because that's where key events are triggered if no input has focus
                    var query = "";
                    var queryTimer = null;
                    this._handleKeydownOnDropdown = function(e) {
                        // prevent down key from scrolling the whole page,
                        // and enter key from submitting a form etc
                        e.preventDefault();
                        // up and down to navigate
                        if (e.key === "ArrowUp" || e.key === "ArrowDown") _this9._handleUpDownKey(e.key); else if (e.key === "Enter") _this9._handleEnterKey(); else if (e.key === "Escape") _this9._closeDropdown(); else if (/^[a-zA-ZÀ-ÿ ]$/.test(e.key)) {
                            // jump to countries that start with the query string
                            if (queryTimer) clearTimeout(queryTimer);
                            query += e.key.toLowerCase();
                            _this9._searchForCountry(query);
                            // if the timer hits 1 second, reset the query
                            queryTimer = setTimeout(function() {
                                query = "";
                            }, 1e3);
                        }
                    };
                    document.addEventListener("keydown", this._handleKeydownOnDropdown);
                }
            }, {
                key: "_handleUpDownKey",
                value: function _handleUpDownKey(key) {
                    var next = key === "ArrowUp" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
                    if (next) {
                        // skip the divider
                        if (next.classList.contains("divider")) {
                            next = key === "ArrowUp" ? next.previousElementSibling : next.nextElementSibling;
                        }
                        this._highlightListItem(next, true);
                    }
                }
            }, {
                key: "_handleEnterKey",
                value: function _handleEnterKey() {
                    if (this.highlightedItem) this._selectListItem(this.highlightedItem);
                }
            }, {
                key: "_searchForCountry",
                value: function _searchForCountry(query) {
                    for (var i = 0; i < this.countries.length; i++) {
                        if (this._startsWith(this.countries[i].name, query)) {
                            var listItem = this.countryList.querySelector("#iti-item-".concat(this.countries[i].iso2));
                            // update highlighting and scroll
                            this._highlightListItem(listItem, false);
                            this._scrollTo(listItem, true);
                            break;
                        }
                    }
                }
            }, {
                key: "_startsWith",
                value: function _startsWith(a, b) {
                    return a.substr(0, b.length).toLowerCase() === b;
                }
            }, {
                key: "_updateValFromNumber",
                value: function _updateValFromNumber(originalNumber) {
                    var number = originalNumber;
                    if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
                        var useNational = !this.options.separateDialCode && (this.options.nationalMode || number.charAt(0) !== "+");
                        var _intlTelInputUtils$nu = intlTelInputUtils.numberFormat, NATIONAL = _intlTelInputUtils$nu.NATIONAL, INTERNATIONAL = _intlTelInputUtils$nu.INTERNATIONAL;
                        var format = useNational ? NATIONAL : INTERNATIONAL;
                        number = intlTelInputUtils.formatNumber(number, this.selectedCountryData.iso2, format);
                    }
                    number = this._beforeSetNumber(number);
                    this.telInput.value = number;
                }
            }, {
                key: "_updateFlagFromNumber",
                value: function _updateFlagFromNumber(originalNumber) {
                    // if we're in nationalMode and we already have US/Canada selected, make sure the number starts
                    // with a +1 so _getDialCode will be able to extract the area code
                    // update: if we dont yet have selectedCountryData, but we're here (trying to update the flag
                    // from the number), that means we're initialising the plugin with a number that already has a
                    // dial code, so fine to ignore this bit
                    var number = originalNumber;
                    var isNanp = this.selectedCountryData.dialCode === "1";
                    if (number && this.options.nationalMode && isNanp && number.charAt(0) !== "+") {
                        if (number.charAt(0) !== "1") number = "1".concat(number);
                        number = "+".concat(number);
                    }
                    // try and extract valid dial code from input
                    var dialCode = this._getDialCode(number);
                    var numeric = this._getNumeric(number);
                    var countryCode = null;
                    if (dialCode) {
                        // check if one of the matching countries is already selected
                        var countryCodes = this.countryCodes[this._getNumeric(dialCode)];
                        var alreadySelected = countryCodes.indexOf(this.selectedCountryData.iso2) !== -1;
                        // check if the given number contains a NANP area code i.e. the only dialCode that could be
                        // extracted was +1 (instead of say +1204) and the actual number's length is >=4
                        var isNanpAreaCode = dialCode === "+1" && numeric.length >= 4;
                        var isRegionlessNanpNumber = this.selectedCountryData.dialCode === "1" && this._isRegionlessNanp(numeric);
                        // only update the flag if:
                        // A) NOT (we currently have a NANP flag selected, and the number is a regionlessNanp)
                        // AND
                        // B) either a matching country is not already selected OR the number contains a NANP area
                        // code (ensure the flag is set to the first matching country)
                        if (!isRegionlessNanpNumber && (!alreadySelected || isNanpAreaCode)) {
                            // if using onlyCountries option, countryCodes[0] may be empty, so we must find the first
                            // non-empty index
                            for (var j = 0; j < countryCodes.length; j++) {
                                if (countryCodes[j]) {
                                    countryCode = countryCodes[j];
                                    break;
                                }
                            }
                        }
                    } else if (number.charAt(0) === "+" && numeric.length) {
                        // invalid dial code, so empty
                        // Note: use getNumeric here because the number has not been formatted yet, so could contain
                        // bad chars
                        countryCode = "";
                    } else if (!number || number === "+") {
                        // empty, or just a plus, so default
                        countryCode = this.defaultCountry;
                    }
                    if (countryCode !== null) {
                        return this._setFlag(countryCode);
                    }
                    return false;
                }
            }, {
                key: "_isRegionlessNanp",
                value: function _isRegionlessNanp(number) {
                    var numeric = this._getNumeric(number);
                    if (numeric.charAt(0) === "1") {
                        var areaCode = numeric.substr(1, 3);
                        return regionlessNanpNumbers.indexOf(areaCode) !== -1;
                    }
                    return false;
                }
            }, {
                key: "_highlightListItem",
                value: function _highlightListItem(listItem, shouldFocus) {
                    var prevItem = this.highlightedItem;
                    if (prevItem) prevItem.classList.remove("highlight");
                    this.highlightedItem = listItem;
                    this.highlightedItem.classList.add("highlight");
                    if (shouldFocus) this.highlightedItem.focus();
                }
            }, {
                key: "_getCountryData",
                value: function _getCountryData(countryCode, ignoreOnlyCountriesOption, allowFail) {
                    var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries;
                    for (var i = 0; i < countryList.length; i++) {
                        if (countryList[i].iso2 === countryCode) {
                            return countryList[i];
                        }
                    }
                    if (allowFail) {
                        return null;
                    }
                    throw new Error("No country data for '".concat(countryCode, "'"));
                }
            }, {
                key: "_setFlag",
                value: function _setFlag(countryCode) {
                    var prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                    // do this first as it will throw an error and stop if countryCode is invalid
                    this.selectedCountryData = countryCode ? this._getCountryData(countryCode, false, false) : {};
                    // update the defaultCountry - we only need the iso2 from now on, so just store that
                    if (this.selectedCountryData.iso2) {
                        this.defaultCountry = this.selectedCountryData.iso2;
                    }
                    this.selectedFlagInner.setAttribute("class", "iti-flag ".concat(countryCode));
                    // update the selected country's title attribute
                    var title = countryCode ? "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : "Unknown";
                    this.selectedFlag.setAttribute("title", title);
                    if (this.options.separateDialCode) {
                        var dialCode = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
                        this.selectedDialCode.innerHTML = dialCode;
                        // add 6px of padding after the grey selected-dial-code box, as this is what we use in the css
                        this.telInput.style.paddingLeft = "".concat(this.selectedFlag.offsetWidth + 6, "px");
                    }
                    // and the input's placeholder
                    this._updatePlaceholder();
                    // update the active list item
                    if (this.options.allowDropdown) {
                        var prevItem = this.activeItem;
                        if (prevItem) {
                            prevItem.classList.remove("active");
                            prevItem.setAttribute("aria-selected", "false");
                        }
                        if (countryCode) {
                            var nextItem = this.countryList.querySelector("#iti-item-".concat(countryCode));
                            nextItem.setAttribute("aria-selected", "true");
                            nextItem.classList.add("active");
                            this.activeItem = nextItem;
                            this.countryList.setAttribute("aria-activedescendant", nextItem.getAttribute("id"));
                        }
                    }
                    // return if the flag has changed or not
                    return prevCountry.iso2 !== countryCode;
                }
            }, {
                key: "_updatePlaceholder",
                value: function _updatePlaceholder() {
                    var shouldSetPlaceholder = this.options.autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && this.options.autoPlaceholder === "polite";
                    if (window.intlTelInputUtils && shouldSetPlaceholder) {
                        var numberType = intlTelInputUtils.numberType[this.options.placeholderNumberType];
                        var placeholder = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, numberType) : "";
                        placeholder = this._beforeSetNumber(placeholder);
                        if (typeof this.options.customPlaceholder === "function") {
                            placeholder = this.options.customPlaceholder(placeholder, this.selectedCountryData);
                        }
                        this.telInput.setAttribute("placeholder", placeholder);
                    }
                }
            }, {
                key: "_selectListItem",
                value: function _selectListItem(listItem) {
                    // update selected flag and active list item
                    var flagChanged = this._setFlag(listItem.getAttribute("data-country-code"));
                    this._closeDropdown();
                    this._updateDialCode(listItem.getAttribute("data-dial-code"), true);
                    // focus the input
                    this.telInput.focus();
                    // put cursor at end - this fix is required for FF and IE11 (with nationalMode=false i.e. auto
                    // inserting dial code), who try to put the cursor at the beginning the first time
                    var len = this.telInput.value.length;
                    this.telInput.setSelectionRange(len, len);
                    if (flagChanged) {
                        this._triggerCountryChange();
                    }
                }
            }, {
                key: "_closeDropdown",
                value: function _closeDropdown() {
                    this.countryList.classList.add("hide");
                    this.countryList.setAttribute("aria-expanded", "false");
                    // update the arrow
                    this.dropdownArrow.classList.remove("up");
                    // unbind key events
                    document.removeEventListener("keydown", this._handleKeydownOnDropdown);
                    document.documentElement.removeEventListener("click", this._handleClickOffToClose);
                    this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList);
                    this.countryList.removeEventListener("click", this._handleClickCountryList);
                    // remove menu from container
                    if (this.options.dropdownContainer) {
                        if (!this.isMobile) window.removeEventListener("scroll", this._handleWindowScroll);
                        if (this.dropdown.parentNode) this.dropdown.parentNode.removeChild(this.dropdown);
                    }
                    this._trigger("close:countrydropdown");
                }
            }, {
                key: "_scrollTo",
                value: function _scrollTo(element, middle) {
                    var container = this.countryList;
                    // windowTop from https://stackoverflow.com/a/14384091/217866
                    var windowTop = window.pageYOffset || document.documentElement.scrollTop;
                    var containerHeight = container.offsetHeight;
                    var containerTop = container.getBoundingClientRect().top + windowTop;
                    var containerBottom = containerTop + containerHeight;
                    var elementHeight = element.offsetHeight;
                    var elementTop = element.getBoundingClientRect().top + windowTop;
                    var elementBottom = elementTop + elementHeight;
                    var newScrollTop = elementTop - containerTop + container.scrollTop;
                    var middleOffset = containerHeight / 2 - elementHeight / 2;
                    if (elementTop < containerTop) {
                        // scroll up
                        if (middle) newScrollTop -= middleOffset;
                        container.scrollTop = newScrollTop;
                    } else if (elementBottom > containerBottom) {
                        // scroll down
                        if (middle) newScrollTop += middleOffset;
                        var heightDifference = containerHeight - elementHeight;
                        container.scrollTop = newScrollTop - heightDifference;
                    }
                }
            }, {
                key: "_updateDialCode",
                value: function _updateDialCode(newDialCodeBare, hasSelectedListItem) {
                    var inputVal = this.telInput.value;
                    // save having to pass this every time
                    var newDialCode = "+".concat(newDialCodeBare);
                    var newNumber;
                    if (inputVal.charAt(0) === "+") {
                        // there's a plus so we're dealing with a replacement (doesn't matter if nationalMode or not)
                        var prevDialCode = this._getDialCode(inputVal);
                        if (prevDialCode) {
                            // current number contains a valid dial code, so replace it
                            newNumber = inputVal.replace(prevDialCode, newDialCode);
                        } else {
                            // current number contains an invalid dial code, so ditch it
                            // (no way to determine where the invalid dial code ends and the rest of the number begins)
                            newNumber = newDialCode;
                        }
                    } else if (this.options.nationalMode || this.options.separateDialCode) {
                        // don't do anything
                        return;
                    } else {
                        // nationalMode is disabled
                        if (inputVal) {
                            // there is an existing value with no dial code: prefix the new dial code
                            newNumber = newDialCode + inputVal;
                        } else if (hasSelectedListItem || !this.options.autoHideDialCode) {
                            // no existing value and either they've just selected a list item, or autoHideDialCode is
                            // disabled: insert new dial code
                            newNumber = newDialCode;
                        } else {
                            return;
                        }
                    }
                    this.telInput.value = newNumber;
                }
            }, {
                key: "_getDialCode",
                value: function _getDialCode(number) {
                    var dialCode = "";
                    // only interested in international numbers (starting with a plus)
                    if (number.charAt(0) === "+") {
                        var numericChars = "";
                        // iterate over chars
                        for (var i = 0; i < number.length; i++) {
                            var c = number.charAt(i);
                            // if char is number (https://stackoverflow.com/a/8935649/217866)
                            if (!isNaN(parseInt(c, 10))) {
                                numericChars += c;
                                // if current numericChars make a valid dial code
                                if (this.countryCodes[numericChars]) {
                                    // store the actual raw string (useful for matching later)
                                    dialCode = number.substr(0, i + 1);
                                }
                                // longest dial code is 4 chars
                                if (numericChars.length === 4) {
                                    break;
                                }
                            }
                        }
                    }
                    return dialCode;
                }
            }, {
                key: "_getFullNumber",
                value: function _getFullNumber() {
                    var val = this.telInput.value.trim();
                    var dialCode = this.selectedCountryData.dialCode;
                    var prefix;
                    var numericVal = this._getNumeric(val);
                    // normalized means ensure starts with a 1, so we can match against the full dial code
                    var normalizedVal = numericVal.charAt(0) === "1" ? numericVal : "1".concat(numericVal);
                    if (this.options.separateDialCode && val.charAt(0) !== "+") {
                        // when using separateDialCode, it is visible so is effectively part of the typed number
                        prefix = "+".concat(dialCode);
                    } else if (val && val.charAt(0) !== "+" && val.charAt(0) !== "1" && dialCode && dialCode.charAt(0) === "1" && dialCode.length === 4 && dialCode !== normalizedVal.substr(0, 4)) {
                        // ensure national NANP numbers contain the area code
                        prefix = dialCode.substr(1);
                    } else {
                        prefix = "";
                    }
                    return prefix + val;
                }
            }, {
                key: "_beforeSetNumber",
                value: function _beforeSetNumber(originalNumber) {
                    var number = originalNumber;
                    if (this.options.separateDialCode) {
                        var dialCode = this._getDialCode(number);
                        if (dialCode) {
                            // US dialCode is "+1", which is what we want
                            // CA dialCode is "+1 123", which is wrong - should be "+1" (as it has multiple area codes)
                            // AS dialCode is "+1 684", which is what we want (as it doesn't have area codes)
                            // Solution: if the country has area codes, then revert to just the dial code
                            if (this.selectedCountryData.areaCodes !== null) {
                                dialCode = "+".concat(this.selectedCountryData.dialCode);
                            }
                            // a lot of numbers will have a space separating the dial code and the main number, and
                            // some NANP numbers will have a hyphen e.g. +1 684-733-1234 - in both cases we want to get
                            // rid of it
                            // NOTE: don't just trim all non-numerics as may want to preserve an open parenthesis etc
                            var start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
                            number = number.substr(start);
                        }
                    }
                    return this._cap(number);
                }
            }, {
                key: "_triggerCountryChange",
                value: function _triggerCountryChange() {
                    this._trigger("countrychange");
                }
            }, {
                key: "handleAutoCountry",
                value: function handleAutoCountry() {
                    if (this.options.initialCountry === "auto") {
                        // we must set this even if there is an initial val in the input: in case the initial val is
                        // invalid and they delete it - they should see their auto country
                        this.defaultCountry = window.intlTelInputGlobals.autoCountry;
                        // if there's no initial value in the input, then update the flag
                        if (!this.telInput.value) {
                            this.setCountry(this.defaultCountry);
                        }
                        this.resolveAutoCountryPromise();
                    }
                }
            }, {
                key: "handleUtils",
                value: function handleUtils() {
                    // if the request was successful
                    if (window.intlTelInputUtils) {
                        // if there's an initial value in the input, then format it
                        if (this.telInput.value) {
                            this._updateValFromNumber(this.telInput.value);
                        }
                        this._updatePlaceholder();
                    }
                    this.resolveUtilsScriptPromise();
                }
            }, {
                key: "destroy",
                value: function destroy() {
                    var form = this.telInput.form;
                    if (this.options.allowDropdown) {
                        // make sure the dropdown is closed (and unbind listeners)
                        this._closeDropdown();
                        this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag);
                        this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
                        // label click hack
                        var label = this._getClosestLabel();
                        if (label) label.removeEventListener("click", this._handleLabelClick);
                    }
                    // unbind hiddenInput listeners
                    if (this.hiddenInput && form) form.removeEventListener("submit", this._handleHiddenInputSubmit);
                    // unbind autoHideDialCode listeners
                    if (this.options.autoHideDialCode) {
                        if (form) form.removeEventListener("submit", this._handleSubmitOrBlurEvent);
                        this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent);
                    }
                    // unbind key events, and cut/paste events
                    this.telInput.removeEventListener("keyup", this._handleKeyupEvent);
                    this.telInput.removeEventListener("cut", this._handleClipboardEvent);
                    this.telInput.removeEventListener("paste", this._handleClipboardEvent);
                    // remove attribute of id instance: data-intl-tel-input-id
                    this.telInput.removeAttribute("data-intl-tel-input-id");
                    // remove markup (but leave the original input)
                    var wrapper = this.telInput.parentNode;
                    wrapper.parentNode.insertBefore(this.telInput, wrapper);
                    wrapper.parentNode.removeChild(wrapper);
                    delete window.intlTelInputGlobals.instances[this.id];
                }
            }, {
                key: "getExtension",
                value: function getExtension() {
                    if (window.intlTelInputUtils) {
                        return intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
                    }
                    return "";
                }
            }, {
                key: "getNumber",
                value: function getNumber(format) {
                    if (window.intlTelInputUtils) {
                        var iso2 = this.selectedCountryData.iso2;
                        return intlTelInputUtils.formatNumber(this._getFullNumber(), iso2, format);
                    }
                    return "";
                }
            }, {
                key: "getNumberType",
                value: function getNumberType() {
                    if (window.intlTelInputUtils) {
                        return intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
                    }
                    return -99;
                }
            }, {
                key: "getSelectedCountryData",
                value: function getSelectedCountryData() {
                    return this.selectedCountryData;
                }
            }, {
                key: "getValidationError",
                value: function getValidationError() {
                    if (window.intlTelInputUtils) {
                        var iso2 = this.selectedCountryData.iso2;
                        return intlTelInputUtils.getValidationError(this._getFullNumber(), iso2);
                    }
                    return -99;
                }
            }, {
                key: "isValidNumber",
                value: function isValidNumber() {
                    var val = this._getFullNumber().trim();
                    var countryCode = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
                    return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(val, countryCode) : null;
                }
            }, {
                key: "setCountry",
                value: function setCountry(originalCountryCode) {
                    var countryCode = originalCountryCode.toLowerCase();
                    // check if already selected
                    if (!this.selectedFlagInner.classList.contains(countryCode)) {
                        this._setFlag(countryCode);
                        this._updateDialCode(this.selectedCountryData.dialCode, false);
                        this._triggerCountryChange();
                    }
                }
            }, {
                key: "setNumber",
                value: function setNumber(number) {
                    // we must update the flag first, which updates this.selectedCountryData, which is used for
                    // formatting the number before displaying it
                    var flagChanged = this._updateFlagFromNumber(number);
                    this._updateValFromNumber(number);
                    if (flagChanged) {
                        this._triggerCountryChange();
                    }
                }
            }, {
                key: "setPlaceholderNumberType",
                value: function setPlaceholderNumberType(type) {
                    this.options.placeholderNumberType = type;
                    this._updatePlaceholder();
                }
            } ]);
            return Iti;
        }();
        /********************
 *  STATIC METHODS
 ********************/
        // get the country data object
        window.intlTelInputGlobals.getCountryData = function() {
            return allCountries;
        };
        // inject a <script> element to load utils.js
        var injectScript = function injectScript(path, handleSuccess, handleFailure) {
            // inject a new script element into the page
            var script = document.createElement("script");
            script.onload = function() {
                forEachInstance("handleUtils");
                if (handleSuccess) handleSuccess();
            };
            script.onerror = function() {
                forEachInstance("rejectUtilsScriptPromise");
                if (handleFailure) handleFailure();
            };
            script.className = "iti-load-utils";
            script.async = true;
            script.src = path;
            document.body.appendChild(script);
        };
        // load the utils script
        window.intlTelInputGlobals.loadUtils = function(path) {
            // 2 options:
            // 1) not already started loading (start)
            // 2) already started loading (do nothing - just wait for the onload callback to fire, which will
            // trigger handleUtils on all instances, invoking their resolveUtilsScriptPromise functions)
            if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
                // only do this once
                window.intlTelInputGlobals.startedLoadingUtilsScript = true;
                // if we have promises, then return a promise
                if (typeof Promise !== "undefined") {
                    return new Promise(function(resolve, reject) {
                        return injectScript(path, resolve, reject);
                    });
                }
                injectScript(path);
            }
            return null;
        };
        // default options
        window.intlTelInputGlobals.defaults = defaults;
        // version
        window.intlTelInputGlobals.version = "15.1.0";
        // convenience wrapper
        return function(input, options) {
            var iti = new Iti(input, options);
            iti._init();
            input.setAttribute("data-intl-tel-input-id", iti.id);
            window.intlTelInputGlobals.instances[iti.id] = iti;
            return iti;
        };
    }();
});
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/*!
 * VERSION: 2.1.3
 * DATE: 2019-05-17
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c],b):e[c%e.length];delete a.cycle},f=function(a){if("function"==typeof a)return a;var b="object"==typeof a?a:{each:a},c=b.ease,d=b.from||0,e=b.base||0,f={},g=isNaN(d),h=b.axis,i={center:.5,end:1}[d]||0;return function(a,j,k){var l,m,n,o,p,q,r,s,t,u=(k||b).length,v=f[u];if(!v){if(t="auto"===b.grid?0:(b.grid||[1/0])[0],!t){for(r=-(1/0);r<(r=k[t++].getBoundingClientRect().left)&&u>t;);t--}for(v=f[u]=[],l=g?Math.min(t,u)*i-.5:d%t,m=g?u*i/t-.5:d/t|0,r=0,s=1/0,q=0;u>q;q++)n=q%t-l,o=m-(q/t|0),v[q]=p=h?Math.abs("y"===h?o:n):Math.sqrt(n*n+o*o),p>r&&(r=p),s>p&&(s=p);v.max=r-s,v.min=s,v.v=u=b.amount||b.each*(t>u?u-1:h?"y"===h?u/t:t:Math.max(t,u/t))||0,v.b=0>u?e-u:e}return u=(v[a]-v.min)/v.max,v.b+(c?c.getRatio(u):u)*v.v}},g=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=g.prototype.render},h=1e-8,i=c._internals,j=i.isSelector,k=i.isArray,l=g.prototype=c.to({},.1,{}),m=[];g.version="2.1.3",l.constructor=g,l.kill()._gc=!1,g.killTweensOf=g.killDelayedCallsTo=c.killTweensOf,g.getTweensOf=c.getTweensOf,g.lagSmoothing=c.lagSmoothing,g.ticker=c.ticker,g.render=c.render,g.distribute=f,l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),c.prototype.invalidate.call(this)},l.updateTo=function(a,b){var d,e=this,f=e.ratio,g=e.vars.immediateRender||a.immediateRender;b&&e._startTime<e._timeline._time&&(e._startTime=e._timeline._time,e._uncache(!1),e._gc?e._enabled(!0,!1):e._timeline.insert(e,e._startTime-e._delay));for(d in a)e.vars[d]=a[d];if(e._initted||g)if(b)e._initted=!1,g&&e.render(0,!0,!0);else if(e._gc&&e._enabled(!0,!1),e._notifyPluginsOfEnabled&&e._firstPT&&c._onPluginEvent("_onDisable",e),e._time/e._duration>.998){var h=e._totalTime;e.render(0,!0,!1),e._initted=!1,e.render(h,!0,!1)}else if(e._initted=!1,e._init(),e._time>0||g)for(var i,j=1/(1-f),k=e._firstPT;k;)i=k.s+k.c,k.c*=j,k.s=i-k.c,k=k._next;return e},l.render=function(a,b,d){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var e,f,g,j,k,l,m,n,o,p=this,q=p._dirty?p.totalDuration():p._totalDuration,r=p._time,s=p._totalTime,t=p._cycle,u=p._duration,v=p._rawPrevTime;if(a>=q-h&&a>=0?(p._totalTime=q,p._cycle=p._repeat,p._yoyo&&0!==(1&p._cycle)?(p._time=0,p.ratio=p._ease._calcEnd?p._ease.getRatio(0):0):(p._time=u,p.ratio=p._ease._calcEnd?p._ease.getRatio(1):1),p._reversed||(e=!0,f="onComplete",d=d||p._timeline.autoRemoveChildren),0===u&&(p._initted||!p.vars.lazy||d)&&(p._startTime===p._timeline._duration&&(a=0),(0>v||0>=a&&a>=-h||v===h&&"isPause"!==p.data)&&v!==a&&(d=!0,v>h&&(f="onReverseComplete")),p._rawPrevTime=n=!b||a||v===a?a:h)):h>a?(p._totalTime=p._time=p._cycle=0,p.ratio=p._ease._calcEnd?p._ease.getRatio(0):0,(0!==s||0===u&&v>0)&&(f="onReverseComplete",e=p._reversed),a>-h?a=0:0>a&&(p._active=!1,0===u&&(p._initted||!p.vars.lazy||d)&&(v>=0&&(d=!0),p._rawPrevTime=n=!b||a||v===a?a:h)),p._initted||(d=!0)):(p._totalTime=p._time=a,0!==p._repeat&&(j=u+p._repeatDelay,p._cycle=p._totalTime/j>>0,0!==p._cycle&&p._cycle===p._totalTime/j&&a>=s&&p._cycle--,p._time=p._totalTime-p._cycle*j,p._yoyo&&0!==(1&p._cycle)&&(p._time=u-p._time,o=p._yoyoEase||p.vars.yoyoEase,o&&(p._yoyoEase||(o!==!0||p._initted?p._yoyoEase=o=o===!0?p._ease:o instanceof Ease?o:Ease.map[o]:(o=p.vars.ease,p._yoyoEase=o=o?o instanceof Ease?o:"function"==typeof o?new Ease(o,p.vars.easeParams):Ease.map[o]||c.defaultEase:c.defaultEase)),p.ratio=o?1-o.getRatio((u-p._time)/u):0)),p._time>u?p._time=u:p._time<0&&(p._time=0)),p._easeType&&!o?(k=p._time/u,l=p._easeType,m=p._easePower,(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===m?k*=k:2===m?k*=k*k:3===m?k*=k*k*k:4===m&&(k*=k*k*k*k),p.ratio=1===l?1-k:2===l?k:p._time/u<.5?k/2:1-k/2):o||(p.ratio=p._ease.getRatio(p._time/u))),r===p._time&&!d&&t===p._cycle)return void(s!==p._totalTime&&p._onUpdate&&(b||p._callback("onUpdate")));if(!p._initted){if(p._init(),!p._initted||p._gc)return;if(!d&&p._firstPT&&(p.vars.lazy!==!1&&p._duration||p.vars.lazy&&!p._duration))return p._time=r,p._totalTime=s,p._rawPrevTime=v,p._cycle=t,i.lazyTweens.push(p),void(p._lazy=[a,b]);!p._time||e||o?e&&this._ease._calcEnd&&!o&&(p.ratio=p._ease.getRatio(0===p._time?0:1)):p.ratio=p._ease.getRatio(p._time/u)}for(p._lazy!==!1&&(p._lazy=!1),p._active||!p._paused&&p._time!==r&&a>=0&&(p._active=!0),0===s&&(2===p._initted&&a>0&&p._init(),p._startAt&&(a>=0?p._startAt.render(a,!0,d):f||(f="_dummyGS")),p.vars.onStart&&(0!==p._totalTime||0===u)&&(b||p._callback("onStart"))),g=p._firstPT;g;)g.f?g.t[g.p](g.c*p.ratio+g.s):g.t[g.p]=g.c*p.ratio+g.s,g=g._next;p._onUpdate&&(0>a&&p._startAt&&p._startTime&&p._startAt.render(a,!0,d),b||(p._totalTime!==s||f)&&p._callback("onUpdate")),p._cycle!==t&&(b||p._gc||p.vars.onRepeat&&p._callback("onRepeat")),f&&(!p._gc||d)&&(0>a&&p._startAt&&!p._onUpdate&&p._startTime&&p._startAt.render(a,!0,d),e&&(p._timeline.autoRemoveChildren&&p._enabled(!1,!1),p._active=!1),!b&&p.vars[f]&&p._callback(f),0===u&&p._rawPrevTime===h&&n!==h&&(p._rawPrevTime=0))},g.to=function(a,b,c){return new g(a,b,c)},g.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new g(a,b,c)},g.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new g(a,b,d)},g.staggerTo=g.allTo=function(a,b,h,i,l,n,o){var p,q,r,s,t=[],u=f(h.stagger||i),v=h.cycle,w=(h.startAt||m).cycle;for(k(a)||("string"==typeof a&&(a=c.selector(a)||a),j(a)&&(a=d(a))),a=a||[],p=a.length-1,r=0;p>=r;r++){q={};for(s in h)q[s]=h[s];if(v&&(e(q,a,r),null!=q.duration&&(b=q.duration,delete q.duration)),w){w=q.startAt={};for(s in h.startAt)w[s]=h.startAt[s];e(q.startAt,a,r)}q.delay=u(r,a[r],a)+(q.delay||0),r===p&&l&&(q.onComplete=function(){h.onComplete&&h.onComplete.apply(h.onCompleteScope||this,arguments),l.apply(o||h.callbackScope||this,n||m)}),t[r]=new g(a[r],b,q)}return t},g.staggerFrom=g.allFrom=function(a,b,c,d,e,f,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,g.staggerTo(a,b,c,d,e,f,h)},g.staggerFromTo=g.allFromTo=function(a,b,c,d,e,f,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,g.staggerTo(a,b,d,e,f,h,i)},g.delayedCall=function(a,b,c,d,e){return new g(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},g.set=function(a,b){return new g(a,0,b)},g.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var n=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(n(f,b)),e=d.length),f=f._next;return d},o=g.getAllTweens=function(b){return n(a._rootTimeline,b).concat(n(a._rootFramesTimeline,b))};g.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=o(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},g.killChildTweensOf=function(a,b){if(null!=a){var e,f,h,l,m,n=i.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),j(a)&&(a=d(a)),k(a))for(l=a.length;--l>-1;)g.killChildTweensOf(a[l],b);else{e=[];for(h in n)for(f=n[h].target.parentNode;f;)f===a&&(e=e.concat(n[h].tweens)),f=f.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var p=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=o(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return g.pauseAll=function(a,b,c){p(!0,a,b,c)},g.resumeAll=function(a,b,c){p(!1,a,b,c)},g.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||h,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},l.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this.duration()?this._time/this._duration:this.ratio},l.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},l.time=function(a,b){if(!arguments.length)return this._time;this._dirty&&this.totalDuration();var c=this._duration,d=this._cycle,e=d*(c+this._repeatDelay);return a>c&&(a=c),this.totalTime(this._yoyo&&1&d?c-a+e:this._repeat?a+e:a,b)},l.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},l.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},l.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},l.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},l.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},g},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a);var c,d,e=this,f=e.vars;e._labels={},e.autoRemoveChildren=!!f.autoRemoveChildren,e.smoothChildTiming=!!f.smoothChildTiming,e._sortChildren=!0,e._onUpdate=f.onUpdate;for(d in f)c=f[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(f[d]=e._swapSelfInParams(c));i(f.tweens)&&e.add(f.tweens,0,f.align,f.stagger)},e=1e-8,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c],b):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=function(a,b,c,d){var e="immediateRender";return e in b||(b[e]=!(c&&c[e]===!1||d)),b},r=function(a){if("function"==typeof a)return a;var b="object"==typeof a?a:{each:a},c=b.ease,d=b.from||0,e=b.base||0,f={},g=isNaN(d),h=b.axis,i={center:.5,end:1}[d]||0;return function(a,j,k){var l,m,n,o,p,q,r,s,t,u=(k||b).length,v=f[u];if(!v){if(t="auto"===b.grid?0:(b.grid||[1/0])[0],!t){for(r=-(1/0);r<(r=k[t++].getBoundingClientRect().left)&&u>t;);t--}for(v=f[u]=[],l=g?Math.min(t,u)*i-.5:d%t,m=g?u*i/t-.5:d/t|0,r=0,s=1/0,q=0;u>q;q++)n=q%t-l,o=m-(q/t|0),v[q]=p=h?Math.abs("y"===h?o:n):Math.sqrt(n*n+o*o),p>r&&(r=p),s>p&&(s=p);v.max=r-s,v.min=s,v.v=u=b.amount||b.each*(t>u?u-1:h?"y"===h?u/t:t:Math.max(t,u/t))||0,v.b=0>u?e-u:e}return u=(v[a]-v.min)/v.max,v.b+(c?c.getRatio(u):u)*v.v}},s=d.prototype=new b;return d.version="2.1.3",d.distribute=r,s.constructor=d,s.kill()._gc=s._forcingPlayhead=s._hasPause=!1,s.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},s.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,q(this,d)),e)},s.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return e=q(this,e,d),b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},s.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),s=r(e.stagger||f),t=e.startAt,u=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),o=0;o<a.length;o++)l=m(e),t&&(l.startAt=m(t),t.cycle&&n(l.startAt,a,o)),u&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,s(o,a[o],a));return this.add(q,g)},s.staggerFrom=function(a,b,c,d,e,f,g,h){return c.runBackwards=!0,this.staggerTo(a,b,q(this,c),d,e,f,g,h)},s.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,this.staggerTo(a,b,q(this,d,c),e,f,g,h,i)},s.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},s.set=function(a,b,d){return this.add(new c(a,0,q(this,b,null,!0)),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g,h,i=new d(a),j=i._timeline;for(null==b&&(b=!0),j._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=j._time,g=j._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||(f=g._startTime-g._delay,0>f&&(e=1),i.add(g,f)),g=h;return j.add(i,0),e&&i.totalDuration(),i},s.add=function(e,f,g,h){var j,k,l,m,n,o,p=this;if("number"!=typeof f&&(f=p._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),p.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return p._uncache(!0)}if("string"==typeof e)return p.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(p,e,f),(e._time||!e._duration&&e._initted)&&(j=(p.rawTime()-e._startTime)*e._timeScale,(!e._duration||Math.abs(Math.max(0,Math.min(e.totalDuration(),j)))-e._totalTime>1e-5)&&e.render(j,!1,!1)),(p._gc||p._time===p._duration)&&!p._paused&&p._duration<p.duration())for(n=p,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return p},s.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},s._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},s.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},s.insert=s.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},s.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},s.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},s.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},s.removeLabel=function(a){return delete this._labels[a],this},s.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},s._parseTimeOrLabel=function(b,c,d,e){var f,g;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(g=e.length;--g>-1;)e[g]instanceof a&&e[g].timeline===this&&this.remove(e[g]);if(f="number"!=typeof b||c?this.duration()>99999999999?this.recent().endTime(!1):this._duration:0,"string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-f:0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=f);else{if(g=b.indexOf("="),-1===g)return null==this._labels[b]?d?this._labels[b]=f+c:c:this._labels[b]+c;c=parseInt(b.charAt(g-1)+"1",10)*Number(b.substr(g+1)),b=g>1?this._parseTimeOrLabel(b.substr(0,g-1),0,d):f}return Number(b)+c},s.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},s.stop=function(){return this.paused(!0)},s.gotoAndPlay=function(a,b){return this.play(a,b)},s.gotoAndStop=function(a,b){return this.pause(a,b)},s.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n,o=this,p=o._time,q=o._dirty?o.totalDuration():o._totalDuration,r=o._startTime,s=o._timeScale,t=o._paused;if(p!==o._time&&(a+=o._time-p),o._hasPause&&!o._forcingPlayhead&&!b){if(a>p)for(d=o._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===o._rawPrevTime||(l=d),d=d._next;else for(d=o._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(o._time=o._totalTime=a=l._startTime,n=o._startTime+(o._reversed?o._duration-a:a)/o._timeScale)}if(a>=q-e&&a>=0)o._totalTime=o._time=q,o._reversed||o._hasPausedChild()||(f=!0,h="onComplete",i=!!o._timeline.autoRemoveChildren,0===o._duration&&(0>=a&&a>=-e||o._rawPrevTime<0||o._rawPrevTime===e)&&o._rawPrevTime!==a&&o._first&&(i=!0,o._rawPrevTime>e&&(h="onReverseComplete"))),o._rawPrevTime=o._duration||!b||a||o._rawPrevTime===a?a:e,a=q+1e-4;else if(e>a)if(o._totalTime=o._time=0,a>-e&&(a=0),(0!==p||0===o._duration&&o._rawPrevTime!==e&&(o._rawPrevTime>0||0>a&&o._rawPrevTime>=0))&&(h="onReverseComplete",f=o._reversed),0>a)o._active=!1,o._timeline.autoRemoveChildren&&o._reversed?(i=f=!0,h="onReverseComplete"):o._rawPrevTime>=0&&o._first&&(i=!0),o._rawPrevTime=a;else{if(o._rawPrevTime=o._duration||!b||a||o._rawPrevTime===a?a:e,0===a&&f)for(d=o._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,o._initted||(i=!0)}else o._totalTime=o._time=o._rawPrevTime=a;if(o._time!==p&&o._first||c||i||l){if(o._initted||(o._initted=!0),o._active||!o._paused&&o._time!==p&&a>0&&(o._active=!0),0===p&&o.vars.onStart&&(0===o._time&&o._duration||b||o._callback("onStart")),m=o._time,m>=p)for(d=o._first;d&&(g=d._next,m===o._time&&(!o._paused||t));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&(o.pause(),o._pauseTime=n),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=o._last;d&&(g=d._prev,m===o._time&&(!o._paused||t));){if(d._active||d._startTime<=p&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>o._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,o.pause(),o._pauseTime=n}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}o._onUpdate&&(b||(j.length&&k(),o._callback("onUpdate"))),h&&(o._gc||(r===o._startTime||s!==o._timeScale)&&(0===o._time||q>=o.totalDuration())&&(f&&(j.length&&k(),o._timeline.autoRemoveChildren&&o._enabled(!1,!1),o._active=!1),!b&&o.vars[h]&&o._callback(h)))}},s._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},s.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},s.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},s.recent=function(){return this._recent},s._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},s.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},s._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},s.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},s.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},s._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},s.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},s.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},s.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this,f=e._last,g=999999999999;f;)b=f._prev,f._dirty&&f.totalDuration(),f._startTime>g&&e._sortChildren&&!f._paused&&!e._calculatingDuration?(e._calculatingDuration=1,e.add(f,f._startTime-f._delay),e._calculatingDuration=0):g=f._startTime,f._startTime<0&&!f._paused&&(d-=f._startTime,e._timeline.smoothChildTiming&&(e._startTime+=f._startTime/e._timeScale,e._time-=f._startTime,e._totalTime-=f._startTime,e._rawPrevTime-=f._startTime),e.shiftChildren(-f._startTime,!1,-9999999999),g=0),c=f._startTime+f._totalDuration/f._timeScale,c>d&&(d=c),f=b;e._duration=e._totalDuration=d,e._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},s.paused=function(b){if(b===!1&&this._paused)for(var c=this._first;c;)c._startTime===this._time&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},s.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},s.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=!!this.vars.yoyo,this._dirty=!0},e=1e-8,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="2.1.3",k.invalidate=function(){return this._yoyo=!!this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1,lazy:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time===f.target.time()||d!==f.duration()||f.isFromTo||f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale).render(f.time(),!0,!0),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.isFromTo=1,d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o,p=this,q=p._time,r=p._dirty?p.totalDuration():p._totalDuration,s=p._duration,t=p._totalTime,u=p._startTime,v=p._timeScale,w=p._rawPrevTime,x=p._paused,y=p._cycle;if(q!==p._time&&(a+=p._time-q),a>=r-e&&a>=0)p._locked||(p._totalTime=r,p._cycle=p._repeat),p._reversed||p._hasPausedChild()||(f=!0,j="onComplete",k=!!p._timeline.autoRemoveChildren,0===p._duration&&(0>=a&&a>=-e||0>w||w===e)&&w!==a&&p._first&&(k=!0,w>e&&(j="onReverseComplete"))),p._rawPrevTime=p._duration||!b||a||p._rawPrevTime===a?a:e,p._yoyo&&1&p._cycle?p._time=a=0:(p._time=s,a=s+1e-4);else if(e>a)if(p._locked||(p._totalTime=p._cycle=0),p._time=0,a>-e&&(a=0),(0!==q||0===s&&w!==e&&(w>0||0>a&&w>=0)&&!p._locked)&&(j="onReverseComplete",f=p._reversed),0>a)p._active=!1,p._timeline.autoRemoveChildren&&p._reversed?(k=f=!0,j="onReverseComplete"):w>=0&&p._first&&(k=!0),p._rawPrevTime=a;else{if(p._rawPrevTime=s||!b||a||p._rawPrevTime===a?a:e,0===a&&f)for(d=p._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,p._initted||(k=!0)}else 0===s&&0>w&&(k=!0),p._time=p._rawPrevTime=a,p._locked||(p._totalTime=a,0!==p._repeat&&(l=s+p._repeatDelay,p._cycle=p._totalTime/l>>0,p._cycle&&p._cycle===p._totalTime/l&&a>=t&&p._cycle--,p._time=p._totalTime-p._cycle*l,p._yoyo&&1&p._cycle&&(p._time=s-p._time),p._time>s?(p._time=s,a=s+1e-4):p._time<0?p._time=a=0:a=p._time));if(p._hasPause&&!p._forcingPlayhead&&!b){if(a=p._time,a>q||p._repeat&&y!==p._cycle)for(d=p._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===p._rawPrevTime||(m=d),d=d._next;else for(d=p._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&(o=p._startTime+(p._reversed?p._duration-m._startTime:m._startTime)/p._timeScale,m._startTime<s&&(p._time=p._rawPrevTime=a=m._startTime,p._totalTime=a+p._cycle*(p._totalDuration+p._repeatDelay)))}if(p._cycle!==y&&!p._locked){var z=p._yoyo&&0!==(1&y),A=z===(p._yoyo&&0!==(1&p._cycle)),B=p._totalTime,C=p._cycle,D=p._rawPrevTime,E=p._time;if(p._totalTime=y*s,p._cycle<y?z=!z:p._totalTime+=s,p._time=q,p._rawPrevTime=0===s?w-1e-4:w,p._cycle=y,p._locked=!0,q=z?0:s,p.render(q,b,0===s),b||p._gc||p.vars.onRepeat&&(p._cycle=C,p._locked=!1,p._callback("onRepeat")),q!==p._time)return;if(A&&(p._cycle=y,p._locked=!0,q=z?s+1e-4:-1e-4,p.render(q,!0,!1)),p._locked=!1,p._paused&&!x)return;p._time=E,p._totalTime=B,p._cycle=C,p._rawPrevTime=D}if(!(p._time!==q&&p._first||c||k||m))return void(t!==p._totalTime&&p._onUpdate&&(b||p._callback("onUpdate")));if(p._initted||(p._initted=!0),p._active||!p._paused&&p._totalTime!==t&&a>0&&(p._active=!0),0===t&&p.vars.onStart&&(0===p._totalTime&&p._totalDuration||b||p._callback("onStart")),n=p._time,n>=q)for(d=p._first;d&&(i=d._next,n===p._time&&(!p._paused||x));)(d._active||d._startTime<=p._time&&!d._paused&&!d._gc)&&(m===d&&(p.pause(),p._pauseTime=o),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=p._last;d&&(i=d._prev,n===p._time&&(!p._paused||x));){if(d._active||d._startTime<=q&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>p._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,p.pause(),p._pauseTime=o}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}p._onUpdate&&(b||(g.length&&h(),p._callback("onUpdate"))),j&&(p._locked||p._gc||(u===p._startTime||v!==p._timeScale)&&(0===p._time||r>=p.totalDuration())&&(f&&(g.length&&h(),p._timeline.autoRemoveChildren&&p._enabled(!1,!1),p._active=!1),!b&&p.vars[j]&&p._callback(j)))},k.getActive=function(a,b,c){var d,e,f=[],g=this.getChildren(a||null==a,b||null==a,!!c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()||0},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()||0},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){if(!arguments.length)return this._time;this._dirty&&this.totalDuration();var c=this._duration,d=this._cycle,e=d*(c+this._repeatDelay);return a>c&&(a=c),this.totalTime(this._yoyo&&1&d?c-a+e:this._repeat?a+e:a,b)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+e)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[0][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],
s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.9",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m,n=this._segCount,o=this._func,p=this._target,q=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,m=b*this._length,e=this._li,m>this._l2&&n-1>e){for(j=n-1;j>e&&(this._l2=k[++e])<=m;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(m<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=m;);0===e&&m<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,m-=this._l1,e=this._si,m>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=m;);this._s1=l[e-1],this._si=e}else if(m<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=m;);0===e&&m<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=1===b?1:(e+(m-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?n-1:n*b>>0,h=(b-c*(1/n))*n;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,p)),o[f]?p[f](i):p[f]=i;if(this._autoRotate){var r,s,t,u,v,w,x,y=this._autoRotate;for(e=y.length;--e>-1;)f=y[e][2],w=y[e][3]||0,x=y[e][4]===!0?1:a,g=this._beziers[y[e][0]],r=this._beziers[y[e][1]],g&&r&&(g=g[c],r=r[c],s=g.a+(g.b-g.a)*h,u=g.b+(g.c-g.b)*h,s+=(u-s)*h,u+=(g.c+(g.d-g.c)*h-u)*h,t=r.a+(r.b-r.a)*h,v=r.b+(r.c-r.b)*h,t+=(v-t)*h,v+=(r.c+(r.d-r.c)*h-v)*h,i=q?Math.atan2(v-t,u-s)*x+w:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,p)),o[f]?p[f](i):p[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="2.1.3",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,w=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,x=/(?:\d|\-|\+|=|#|\.)*/g,y=/opacity *= *([^)]*)/i,z=/opacity:([^;]*)/i,A=/alpha\(opacity *=.+?\)/i,B=/^(rgb|hsl)/,C=/([A-Z])/g,D=/-([a-z])/gi,E=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,F=function(a,b){return b.toUpperCase()},G=/(?:Left|Right|Width)/i,H=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,I=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,J=/,(?=[^\)]*(?:\(|$))/gi,K=/[\s,\(]/i,L=Math.PI/180,M=180/Math.PI,N={},O={style:{}},P=_gsScope.document||{createElement:function(){return O}},Q=function(a,b){var c=P.createElementNS?P.createElementNS(b||"http://www.w3.org/1999/xhtml",a):P.createElement(a);return c.style?c:P.createElement(a)},R=Q("div"),S=Q("img"),T=g._internals={_specialProps:i},U=(_gsScope.navigator||{}).userAgent||"",V=function(){var a=U.indexOf("Android"),b=Q("a");return m=-1!==U.indexOf("Safari")&&-1===U.indexOf("Chrome")&&(-1===a||parseFloat(U.substr(a+8,2))>3),o=m&&parseFloat(U.substr(U.indexOf("Version/")+8,2))<6,n=-1!==U.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(U))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),W=function(a){return y.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},X=function(a){_gsScope.console&&console.log(a)},Y="",Z="",$=function(a,b){b=b||R;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Z=3===d?"ms":c[d],Y="-"+Z.toLowerCase()+"-",Z+a):null},_="undefined"!=typeof window?window:P.defaultView||{getComputedStyle:function(){}},aa=function(a){return _.getComputedStyle(a)},ba=g.getStyle=function(a,b,c,d,e){var f;return V||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||aa(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(C,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):W(a)},ca=T.convertToPixels=function(a,c,d,e,f){if("px"===e||!e&&"lineHeight"!==c)return d;if("auto"===e||!d)return 0;var h,i,j,k=G.test(c),l=a,m=R.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"lineHeight"!==c||e)if("%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+ba(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||P.body,-1!==ba(l,"display").indexOf("flex")&&(m.position="absolute"),i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(R),h=parseFloat(R[k?"offsetWidth":"offsetHeight"]),l.removeChild(R),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=ca(a,c,d,e,!0))}else i=aa(a).lineHeight,a.style.lineHeight=d,h=parseFloat(aa(a).lineHeight),a.style.lineHeight=i;return o&&(h/=100),n?-h:h},da=T.calculateOffset=function(a,b,c){if("absolute"!==ba(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=ba(a,"margin"+d,c);return a["offset"+d]-(ca(a,b,parseFloat(e),e.replace(x,""))||0)},ea=function(a,b){var c,d,e,f={};if(b=b||aa(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Fa===e)&&(f[e.replace(D,F)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ea===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(D,F)]=b[c]);return V||(f.opacity=W(a)),d=Ta(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Ha&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},fa=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(w,"")?f:0:da(a,g),void 0!==j[g]&&(h=new ua(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ga={width:["Left","Right"],height:["Top","Bottom"]},ha=["marginLeft","marginRight","marginTop","marginBottom"],ia=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||aa(a))[b]||0;if(a.getCTM&&Qa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ga[b],f=e.length;for(c=c||aa(a,null);--f>-1;)d-=parseFloat(ba(a,"padding"+e[f],c,!0))||0,d-=parseFloat(ba(a,"border"+e[f]+"Width",c,!0))||0;return d},ja=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ja(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(w,"")),b.oy=parseFloat(f.replace(w,"")),b.v=a),b||a},ka=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},la=function(a,b){"function"==typeof a&&(a=a(r,q));var c="string"==typeof a&&"="===a.charAt(1);return"string"==typeof a&&"v"===a.charAt(a.length-2)&&(a=(c?a.substr(0,2):0)+window["inner"+("vh"===a.substr(-2)?"Height":"Width")]*(parseFloat(c?a.substr(2):a)/100)),null==a?b:c?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ma=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:M)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},na={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},oa=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},pa=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),na[a])c=na[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(c[3])),c[0]=oa(g+1/3,d,e),c[1]=oa(g,d,e),c[2]=oa(g-1/3,d,e);else c=a.match(s)||na.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=na.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},qa=function(a,b){var c,d,e,f=a.match(ra)||[],g=0,h="";if(!f.length)return a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=pa(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},ra="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in na)ra+="|"+j+"\\b";ra=new RegExp(ra+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+" "+a[1];ra.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=qa(a[0],b),a[1]=qa(a[1],b)),ra.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var sa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(ra)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&J.test(a)){for(o=a.replace(J,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(ra)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&J.test(a)){for(f=a.replace(J,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(","===j?u:v)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return(h&&"none"!==a?a.substr(0,a.indexOf(b[0]))||h:h)+b.join(j)+i}:function(a){return a}},ta=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},ua=(T._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=i.r(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod.call(this._tween,h.rotation,this.t,this._tween):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),va=(T._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=N;for(c._transform=null,N=b,d=k=c.parse(a,b,d,e),N=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new ua(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new ua(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},T.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof va||f.push(this.n),this.r=j?"function"==typeof j?j:Math.round:j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),wa=function(a,b,c,d,e,f){var g=new va(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},xa=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new va(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&ra.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(-1!==(d+c).indexOf("rgb")||-1!==(d+c).indexOf("hsl")?(D=D.join(" ").replace(J,", ").split(" "),E=E.join(" ").replace(J,", ").split(" ")):(D=D.join(" ").split(",").join(", ").split(" "),E=E.join(" ").split(",").join(", ").split(" ")),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,ra.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m]+"",x=parseFloat(p),x||0===x)h.appendXtra("",x,ka(u,x),u.replace(t,""),G&&-1!==u.indexOf("px")?Math.round:!1,!0);else if(e&&ra.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&V,z=u,p=pa(p,C),u=pa(u,C),y=p.length+u.length>6,y&&!V&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(V||(y=!1),C?h.appendXtra(z.substr(0,z.indexOf("hsl"))+(y?"hsla(":"hsl("),p[0],ka(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ka(u[1],p[1]),"%,",!1).appendXtra("",p[2],ka(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(z.substr(0,z.indexOf("rgb"))+(y?"rgba(":"rgb("),p[0],u[0]-p[0],",",Math.round,!0).appendXtra("",p[1],u[1]-p[1],",",Math.round).appendXtra("",p[2],u[2]-p[2],y?",":B,Math.round),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),ra.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ka(w[n],A),"",G&&"px"===p.substr(z+A.length,2)?Math.round:!1,0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},ya=9;for(j=va.prototype,j.l=j.pr=0;--ya>0;)j["xn"+ya]=0,j["xs"+ya]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new va(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var za=function(a,b){b=b||{},this.p=b.prefix?$(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||sa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.allowFunc=b.allowFunc,this.pr=b.priority||0},Aa=T._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new za(f[d],b)},Ba=T._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";Aa(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(X("Error: "+b+" js file not loaded."),f)}})}};j=za.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(J.test(c)||J.test(b)?(h=b.replace(J,"|").split("|"),i=c.replace(J,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return xa(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(ba(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){Aa(a,{parser:function(a,d,e,f,g,h,i){var j=new va(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Ca,Da="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ea=$("transform"),Fa=Y+"transform",Ga=$("transformOrigin"),Ha=null!==$("perspective"),Ia=T.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Ha?g.defaultForce3D||"auto":!1},Ja=_gsScope.SVGElement,Ka=function(a,b,c){var d,e=P.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},La=P.documentElement||{},Ma=function(){var a,b,c,d=p||/Android/i.test(U)&&!_gsScope.chrome;return P.createElementNS&&La.appendChild&&!d&&(a=Ka("svg",La),b=Ka("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ga]="50% 50%",b.style[Ea]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Ha),La.removeChild(a)),d}(),Na=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Sa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ja(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Ra&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Oa=function(a){var b,c=Q("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(La.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Oa}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),La.removeChild(c),this.style.cssText=f,b},Pa=function(a){try{return a.getBBox()}catch(b){return Oa.call(a,!0)}},Qa=function(a){return!(!Ja||!a.getCTM||a.parentNode&&!a.ownerSVGElement||!Pa(a))},Ra=[1,0,0,1,0,0],Sa=function(a,b){var c,d,e,f,g,h,i,j=a._gsTransform||new Ia,k=1e5,l=a.style;if(Ea?d=ba(a,Fa,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(H),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),j.x||0,j.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,Ea&&c&&!a.offsetParent&&a!==La&&(f=l.display,l.display="block",i=a.parentNode,i&&a.offsetParent||(g=1,h=a.nextSibling,La.appendChild(a)),d=ba(a,Fa,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?l.display=f:Xa(l,"display"),g&&(h?i.insertBefore(a,h):i?i.appendChild(a):La.removeChild(a))),(j.svg||a.getCTM&&Qa(a))&&(c&&-1!==(l[Ea]+"").indexOf("matrix")&&(d=l[Ea],c=0),e=a.getAttribute("transform"),c&&e&&(e=a.transform.baseVal.consolidate().matrix,d="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")",c=0)),c)return Ra;for(e=(d||"").match(s)||[],ya=e.length;--ya>-1;)f=Number(e[ya]),e[ya]=(g=f-(f|=0))?(g*k+(0>g?-.5:.5)|0)/k+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ta=T.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ia:new Ia,n=m.scaleX<0,o=2e-5,p=1e5,q=Ha?parseFloat(ba(a,Ga,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Qa(a)),m.svg&&(Na(a,ba(a,Ga,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Ca=g.useSVGTransformAttr||Ma),f=Sa(a),f!==Ra){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],L=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*M,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,L=E*-w+L*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*M,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,L=A*w+L*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*M,N&&(v=Math.cos(N),w=Math.sin(N),s=x*v+y*w,t=B*v+C*w,u=F*v+G*w,y=y*v-x*w,C=C*v-B*w,G=G*v-F*w,x=s,B=t,F=u),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),N=Math.atan2(B,C),m.scaleX=(Math.sqrt(x*x+y*y+z*z)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+D*D)*p+.5|0)/p,m.scaleZ=(Math.sqrt(F*F+G*G+H*H)*p+.5|0)/p,x/=m.scaleX,B/=m.scaleY,y/=m.scaleX,C/=m.scaleY,Math.abs(N)>o?(m.skewX=N*M,B=0,"simple"!==m.skewType&&(m.scaleY*=1/Math.cos(N))):m.skewX=0,m.perspective=L?1/(0>L?-L:L):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Ha||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*M:m.rotation||0,l=R||S?Math.atan2(R,S)*M+k:m.skewX||0,m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Ha&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180)),m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Ca&&a.style[Ea]?b.delayedCall(.001,function(){Xa(a.style,Ea)}):!Ca&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Ua=function(a){var b,c,d=this.data,e=-d.rotation*L,f=e+d.skewX*L,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(I,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||y.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var w,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),ya=0;4>ya;ya++)z=ha[ya],w=m[z],c=-1!==w.indexOf("px")?parseFloat(w):ca(this.t,z,parseFloat(w),w.replace(x,""))||0,A=c!==d[z]?2>ya?-d.ieOffsetX:-d.ieOffsetY:2>ya?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===ya||2===ya?1:B)))+"px"}}},Va=T.set3DTransformRatio=T.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,K=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Ca&&K||!Ha)return void(B||P||K?(B*=L,x=P*L,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*L),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*L),b=Math.sqrt(1+b*b),c*=b,f*=b)),K&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Ca&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",K&&Ca?this.t.setAttribute("transform","matrix("+u):A[Ea]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ea]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=L,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*L,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*L),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*L),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||K))return void(A[Ea]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*L,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*L,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||K)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),K&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),
C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ea]=u};j=Ia.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,Aa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j=i.scale&&"function"==typeof i.scale?i.scale:0;j&&(i.scale=j(r,a));var k,l,m,n,o,p,s,t,u,v=a._gsTransform,w=a.style,x=1e-6,y=Da.length,z=i,A={},B="transformOrigin",C=Ta(a,e,!0,z.parseTransform),D=z.transform&&("function"==typeof z.transform?z.transform(r,q):z.transform);if(C.skewType=z.skewType||C.skewType||g.defaultSkewType,d._transform=C,"rotationZ"in z&&(z.rotation=z.rotationZ),D&&"string"==typeof D&&Ea)l=R.style,l[Ea]=D,l.display="block",l.position="absolute",-1!==D.indexOf("%")&&(l.width=ba(a,"width"),l.height=ba(a,"height")),P.body.appendChild(R),k=Ta(R,null,!1),"simple"===C.skewType&&(k.scaleY*=Math.cos(k.skewX*L)),C.svg&&(p=C.xOrigin,s=C.yOrigin,k.x-=C.xOffset,k.y-=C.yOffset,(z.transformOrigin||z.svgOrigin)&&(D={},Na(a,ja(z.transformOrigin),D,z.svgOrigin,z.smoothOrigin,!0),p=D.xOrigin,s=D.yOrigin,k.x-=D.xOffset-C.xOffset,k.y-=D.yOffset-C.yOffset),(p||s)&&(t=Sa(R,!0),k.x-=p-(p*t[0]+s*t[2]),k.y-=s-(p*t[1]+s*t[3]))),P.body.removeChild(R),k.perspective||(k.perspective=C.perspective),null!=z.xPercent&&(k.xPercent=la(z.xPercent,C.xPercent)),null!=z.yPercent&&(k.yPercent=la(z.yPercent,C.yPercent));else if("object"==typeof z){if(k={scaleX:la(null!=z.scaleX?z.scaleX:z.scale,C.scaleX),scaleY:la(null!=z.scaleY?z.scaleY:z.scale,C.scaleY),scaleZ:la(z.scaleZ,C.scaleZ),x:la(z.x,C.x),y:la(z.y,C.y),z:la(z.z,C.z),xPercent:la(z.xPercent,C.xPercent),yPercent:la(z.yPercent,C.yPercent),perspective:la(z.transformPerspective,C.perspective)},o=z.directionalRotation,null!=o)if("object"==typeof o)for(l in o)z[l]=o[l];else z.rotation=o;"string"==typeof z.x&&-1!==z.x.indexOf("%")&&(k.x=0,k.xPercent=la(z.x,C.xPercent)),"string"==typeof z.y&&-1!==z.y.indexOf("%")&&(k.y=0,k.yPercent=la(z.y,C.yPercent)),k.rotation=ma("rotation"in z?z.rotation:"shortRotation"in z?z.shortRotation+"_short":C.rotation,C.rotation,"rotation",A),Ha&&(k.rotationX=ma("rotationX"in z?z.rotationX:"shortRotationX"in z?z.shortRotationX+"_short":C.rotationX||0,C.rotationX,"rotationX",A),k.rotationY=ma("rotationY"in z?z.rotationY:"shortRotationY"in z?z.shortRotationY+"_short":C.rotationY||0,C.rotationY,"rotationY",A)),k.skewX=ma(z.skewX,C.skewX),k.skewY=ma(z.skewY,C.skewY)}for(Ha&&null!=z.force3D&&(C.force3D=z.force3D,n=!0),m=C.force3D||C.z||C.rotationX||C.rotationY||k.z||k.rotationX||k.rotationY||k.perspective,m||null==z.scale||(k.scaleZ=1);--y>-1;)u=Da[y],D=k[u]-C[u],(D>x||-x>D||null!=z[u]||null!=N[u])&&(n=!0,f=new va(C,u,C[u],D,f),u in A&&(f.e=A[u]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return D="function"==typeof z.transformOrigin?z.transformOrigin(r,q):z.transformOrigin,C.svg&&(D||z.svgOrigin)&&(p=C.xOffset,s=C.yOffset,Na(a,ja(D),k,z.svgOrigin,z.smoothOrigin),f=wa(C,"xOrigin",(v?C:k).xOrigin,k.xOrigin,f,B),f=wa(C,"yOrigin",(v?C:k).yOrigin,k.yOrigin,f,B),(p!==C.xOffset||s!==C.yOffset)&&(f=wa(C,"xOffset",v?p:C.xOffset,C.xOffset,f,B),f=wa(C,"yOffset",v?s:C.yOffset,C.yOffset,f,B)),D="0px 0px"),(D||Ha&&m&&C.zOrigin)&&(Ea?(n=!0,u=Ga,D||(D=(ba(a,u,e,!1,"50% 50%")+"").split(" "),D=D[0]+" "+D[1]+" "+C.zOrigin+"px"),D+="",f=new va(w,u,0,0,f,-1,B),f.b=w[u],f.plugin=h,Ha?(l=C.zOrigin,D=D.split(" "),C.zOrigin=(D.length>2?parseFloat(D[2]):l)||0,f.xs0=f.e=D[0]+" "+(D[1]||"50%")+" 0px",f=new va(C,"zOrigin",0,0,f,-1,f.n),f.b=l,f.xs0=f.e=C.zOrigin):f.xs0=f.e=D):ja(D+"",C)),n&&(d._transformType=C.svg&&Ca||!m&&3!==this._transformType?2:3),j&&(i.scale=j),f},allowFunc:!0,prefix:!0}),Aa("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),Aa("clipPath",{defaultValue:"inset(0%)",prefix:!0,multi:!0,formatter:sa("inset(0% 0% 0% 0%)",!1,!0)}),Aa("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=$(y[j])),m=l=ba(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=ca(a,"borderLeft",o,t),w=ca(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=ca(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=xa(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:sa("0px 0px 0px 0px",!1,!0)}),Aa("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return xa(a.style,c,this.format(ba(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:sa("0px 0px",!1,!0)}),Aa("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||aa(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=ba(a,"backgroundImage").replace(E,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),S.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-S.width:a.offsetHeight-S.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ja}),Aa("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="","co"===a.substr(0,2)?a:ja(-1===a.indexOf(" ")?a+" "+a:a)}}),Aa("perspective",{defaultValue:"0px",prefix:!0}),Aa("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),Aa("transformStyle",{prefix:!0}),Aa("backfaceVisibility",{prefix:!0}),Aa("userSelect",{prefix:!0}),Aa("margin",{parser:ta("marginTop,marginRight,marginBottom,marginLeft")}),Aa("padding",{parser:ta("paddingTop,paddingRight,paddingBottom,paddingLeft")}),Aa("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(ba(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),Aa("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),Aa("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),Aa("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=ba(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(x,"");return"px"!==j&&(h=parseFloat(h)/ca(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+ba(a,"borderTopStyle",e,!1,"solid")+" "+ba(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(ra)||["#000"])[0]}}),Aa("borderWidth",{parser:ta("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),Aa("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new va(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Wa=function(a){var b,c=this.t,d=c.filter||ba(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!ba(this.data,"filter")):(c.filter=d.replace(A,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(y,"opacity="+e))};Aa("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(ba(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===ba(a,"visibility",e)&&0!==b&&(h=0),V?f=new va(i,"opacity",h,b-h,f):(f=new va(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Wa),j&&(f=new va(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Xa=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(C,"-$1").toLowerCase())):a.removeAttribute(b))},Ya=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Xa(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};Aa("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new va(a,d,0,0,g,2),g.setRatio=Ya,g.pr=-11,c=!0,g.b=o,k=ea(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=fa(a,k,ea(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText!==p&&(a.style.cssText=p),g=g.xfirst=f.parse(a,j.difs,g,h)}});var Za=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ga:i[c].p),Xa(g,c);e&&(Xa(g,Ea),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(Aa("clearProps",{parser:function(a,b,d,e,f){return f=new va(a,d,0,0,f,2),f.setRatio=Za,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),ya=j.length;ya--;)Ba(j[ya]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=aa(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,y,A=a.style;if(l&&""===A.zIndex&&(n=ba(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ea(a,e),A.cssText=t+";"+b,n=fa(a,n,ea(a)).difs,!V&&z.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(y=3===this._transformType,Ea?m&&(l=!0,""===A.zIndex&&(w=ba(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(y?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new va(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ea?Va:Ua,x.data=this._transform||Ta(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b){if(n=b[g],h=i[g],"function"!=typeof n||h&&h.allowFunc||(n=n(r,q)),h)c=h.parse(a,n,g,this,c,f,b);else{if("--"===g.substr(0,2)){this._tween._propLookup[g]=this._addTween.call(this._tween,a.style,"setProperty",aa(a).getPropertyValue(g)+"",n+"",g,!1,g);continue}m=ba(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&B.test(n)?(s||(n=pa(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=xa(u,g,m,n,!0,"transparent",c,0,f)):s&&K.test(n)?c=xa(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ia(a,g,e),o="px"):"left"===g||"top"===g?(j=da(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(x,"")):(l=parseFloat(n),p=s?n.replace(x,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&(""!==p||"lineHeight"===g)&&(l||0===l)&&j&&(j=ca(a,g,j,o),"%"===p?(j/=ca(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=ca(a,g,1,p):"px"!==p&&(l=ca(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new va(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):X("invalid "+g+" tween value: "+b[g]):(c=new va(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))}f&&c&&!c.plugin&&(c.plugin=f)}return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=e.r(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=e.r(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ta(this._target,e,!0),this._transformType=this._transform.svg&&Ca||!a&&3!==this._transformType?2:3};var $a=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new va(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=$a,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&(b.r=a[b.p]),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var _a=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)_a(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ea(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||_a(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,_a(a,k,m),i.render(c,!0,!0),_a(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=fa(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.7.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){var b=1>a?Math.pow(10,(a+"").length-2):1;return function(c){return(Math.round(c/a)*a*b|0)/b}},c=function(a,b){for(;a;)a.f||a.blob||(a.m=b||Math.round),a=a._next},d=a.prototype;d._onInitAllProps=function(){var a,d,e,f,g=this._tween,h=g.vars.roundProps,i={},j=g._propLookup.roundProps;if("object"!=typeof h||h.push)for("string"==typeof h&&(h=h.split(",")),e=h.length;--e>-1;)i[h[e]]=Math.round;else for(f in h)i[f]=b(h[f]);for(f in i)for(a=g._firstPT;a;)d=a._next,a.pg?a.t._mod(i):a.n===f&&(2===a.f&&a.t?c(a.t._firstPT,i[f]):(this._add(a.t,f,a.s,a.c,i[f]),d&&(d._prev=a._prev),a._prev?a._prev._next=d:g._firstPT===a&&(g._firstPT=d),a._next=a._prev=null,g._propLookup[f]=j)),a=d;return!1},d._add=function(a,b,c,d,e){this._addTween(a,b,c,c+d,b,e||Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e,f=_gsScope.GreenSockGlobals||_gsScope,g=f.com.greensock,h=2*Math.PI,i=Math.PI/2,j=g._class,k=function(b,c){var d=j("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},l=a.register||function(){},m=function(a,b,c,d,e){var f=j("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return l(f,a),f},n=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},o=function(b,c){var d=j("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},p=m("Back",o("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),o("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),o("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),q=j("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),r=q.prototype=new a;return r.constructor=q,r.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1===a?0:1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},q.ease=new q(.7,.7),r.config=q.config=function(a,b,c){return new q(a,b,c)},b=j("easing.SteppedEase",function(a,b){a=a||1,this._p1=1/a,this._p2=a+(b?0:1),this._p3=b?1:0},!0),r=b.prototype=new a,r.constructor=b,r.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),((this._p2*a|0)+this._p3)*this._p1},r.config=b.config=function(a,c){return new b(a,c)},c=j("easing.ExpoScaleEase",function(a,b,c){this._p1=Math.log(b/a),this._p2=b-a,this._p3=a,this._ease=c},!0),r=c.prototype=new a,r.constructor=c,r.getRatio=function(a){return this._ease&&(a=this._ease.getRatio(a)),(this._p3*Math.exp(this._p1*a)-this._p3)/this._p2},r.config=c.config=function(a,b,d){return new c(a,b,d)},d=j("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),m=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--m>-1;)c=o?Math.random():1/l*m,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:m%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new n(1,1,null),m=l;--m>-1;)g=j[m],h=new n(g.x,g.y,h);this._prev=new n(0,0,0!==h.t?h:h.next)},!0),r=d.prototype=new a,r.constructor=d,r.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},r.config=function(a){return new d(a)},d.ease=new d,m("Bounce",k("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),k("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),k("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),m("Circ",k("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),k("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),k("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),e=function(b,c,d){var e=j("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/h*(Math.asin(1/this._p1)||0),this._p2=h/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},m("Elastic",e("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),e("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),e("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),m("Expo",k("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),k("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),k("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),m("Sine",k("SineOut",function(a){return Math.sin(a*i)}),k("SineIn",function(a){return-Math.cos(a*i)+1}),k("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),j("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),l(f.SlowMo,"SlowMo","ease,"),l(d,"RoughEase","ease,"),l(b,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a,f=e[b];if(f)return"undefined"!=typeof module&&module.exports&&(module.exports=f),f;var g,h,i,j,k,l=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},m=l("com.greensock"),n=1e-8,o=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},p=function(){},q=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),r={},s=function(d,f,g,h){this.sc=r[d]?r[d].sc:[],r[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var k,m,n,o,p=f.length,q=p;--p>-1;)(k=r[f[p]]||new s(f[p],[])).gsClass?(i[p]=k.gsClass,q--):j&&k.sc.push(this);if(0===q&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=l(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,"undefined"!=typeof module&&module.exports)if(d===b){module.exports=c[b]=o;for(p in c)o[p]=c[p]}else c[b]&&(c[b][n]=o);else"function"==typeof define&&define.amd&&define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});for(p=0;p<this.sc.length;p++)this.sc[p].check()}},this.check(!0)},t=a._gsDefine=function(a,b,c,d){return new s(a,b,c,d)},u=m._class=function(a,b,c){return b=b||function(){},t(a,[],function(){return b},c),b};t.globals=e;var v=[0,0,1,1],w=u("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?v.concat(b):v},!0),x=w.map={},y=w.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?u("easing."+f,null,!0):m.easing[f]||{},g=k.length;--g>-1;)h=k[g],x[f+"."+h]=x[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(i=w.prototype,i._calcEnd=!1,i.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},g=["Linear","Quad","Cubic","Quart","Quint,Strong"],h=g.length;--h>-1;)i=g[h]+",Power"+h,y(new w(null,null,1,h),i,"easeOut",!0),y(new w(null,null,2,h),i,"easeIn"+(0===h?",easeNone":"")),y(new w(null,null,3,h),i,"easeInOut");x.linear=m.easing.Linear.easeIn,x.swing=m.easing.Quad.easeInOut;var z=u("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});i=z.prototype,i.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],i=0;for(this!==j||k||j.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===i&&f.pr<e&&(i=g+1);h.splice(i,0,{c:b,s:c,up:d,pr:e})},i.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},i.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var A=a.requestAnimationFrame,B=a.cancelAnimationFrame,C=Date.now||function(){return(new Date).getTime()},D=C();for(g=["ms","moz","webkit","o"],h=g.length;--h>-1&&!A;)A=a[g[h]+"RequestAnimationFrame"],B=a[g[h]+"CancelAnimationFrame"]||a[g[h]+"CancelRequestAnimationFrame"];u("Ticker",function(a,b){var c,e,f,g,h,i=this,l=C(),m=b!==!1&&A?"auto":!1,o=500,q=33,r="tick",s=function(a){var b,d,j=C()-D;j>o&&(l+=j-q),D+=j,i.time=(D-l)/1e3,b=i.time-h,(!c||b>0||a===!0)&&(i.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&i.dispatchEvent(r)};z.call(i),i.time=i.frame=0,i.tick=function(){s(!0)},i.lagSmoothing=function(a,b){return arguments.length?(o=a||1/n,void(q=Math.min(b,o,0))):1/n>o},i.sleep=function(){null!=f&&(m&&B?B(f):clearTimeout(f),e=p,f=null,i===j&&(k=!1))},i.wake=function(a){null!==f?i.sleep():a?l+=-D+(D=C()):i.frame>10&&(D=C()-o+5),e=0===c?p:m&&A?A:function(a){return setTimeout(a,1e3*(h-i.time)+1|0)},i===j&&(k=!0),s(2)},i.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void i.wake()):c},i.useRAF=function(a){return arguments.length?(i.sleep(),m=a,void i.fps(c)):m},i.fps(a),setTimeout(function(){"auto"===m&&i.frame<5&&"hidden"!==(d||{}).visibilityState&&i.useRAF(!1)},1500)}),i=m.Ticker.prototype=new m.events.EventDispatcher,i.constructor=m.Ticker;var E=u("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=!!b.immediateRender,this.data=b.data,this._reversed=!!b.reversed,Z){k||j.wake();var c=this.vars.useFrames?Y:Z;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});j=E.ticker=new m.Ticker,i=E.prototype,i._dirty=i._gc=i._initted=i._paused=!1,i._totalTime=i._time=0,i._rawPrevTime=-1,i._next=i._last=i._onUpdate=i._timeline=i.timeline=null,i._paused=!1;var F=function(){k&&C()-D>2e3&&("hidden"!==(d||{}).visibilityState||!j.lagSmoothing())&&j.wake();var a=setTimeout(F,2e3);a.unref&&a.unref()};F(),i.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},i.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},i.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},i.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},i.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},i.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},i.render=function(a,b,c){},i.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},i.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale-n},i._enabled=function(a,b){return k||j.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},i._kill=function(a,b){return this._enabled(!1,!1)},i.kill=function(a,b){return this._kill(a,b),this},i._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},i._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},i._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},i.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=q(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},i.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},i.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},i.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},i.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},i.totalTime=function(a,b,c){if(k||j.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),
e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(K.length&&_(),this.render(a,b,!1),K.length&&_())}return this},i.progress=i.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},i.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},i.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},i.timeScale=function(a){if(!arguments.length)return this._timeScale;var b,c;for(a=a||n,this._timeline&&this._timeline.smoothChildTiming&&(b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime(),this._startTime=c-(c-this._startTime)*this._timeScale/a),this._timeScale=a,c=this.timeline;c&&c.timeline;)c._dirty=!0,c.totalDuration(),c=c.timeline;return this},i.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},i.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(k||a||j.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var G=u("core.SimpleTimeline",function(a){E.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});i=G.prototype=new E,i.constructor=G,i.kill()._gc=!1,i._first=i._last=i._recent=null,i._sortChildren=!1,i.add=i.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=this.rawTime()-(a._timeline.rawTime()-a._pauseTime)),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},i._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},i.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused&&!e._gc)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},i.rawTime=function(){return k||j.wake(),this._totalTime};var H=u("TweenLite",function(b,c,d){if(E.call(this,c,d),this.render=H.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:H.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?X[H.defaultOverwrite]:"number"==typeof i?i>>0:X[i],(h||b instanceof Array||b.push&&q(b))&&"number"!=typeof b[0])for(this._targets=g=o(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(o(f))):(this._siblings[e]=aa(f,this,!1),1===i&&this._siblings[e].length>1&&ca(f,this,null,1,this._siblings[e])):(f=g[e--]=H.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=aa(b,this,!1),1===i&&this._siblings.length>1&&ca(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-n,this.render(Math.min(0,-this._delay)))},!0),I=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},J=function(a,b){var c,d={};for(c in a)W[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!T[c]||T[c]&&T[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};i=H.prototype=new E,i.constructor=H,i.kill()._gc=!1,i.ratio=0,i._firstPT=i._targets=i._overwrittenProps=i._startAt=null,i._notifyPluginsOfEnabled=i._lazy=!1,H.version="2.1.3",H.defaultEase=i._ease=new w(null,null,1,1),H.defaultOverwrite="auto",H.ticker=j,H.autoSleep=120,H.lagSmoothing=function(a,b){j.lagSmoothing(a,b)},H.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(H.selector=c,c(b)):(d||(d=a.document),d?d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b):b)};var K=[],L={},M=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,N=/[\+-]=-?[\.\d]/,O=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a&&null!=this.end?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m.call(this._tween,b,this._target||c.t,this._tween):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},P=function(a){return(1e3*a|0)/1e3+""},Q=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(M)||[],f=b.match(M)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:P}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=O,N.test(b)&&(l.end=null),l},R=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=Q(m,n?parseFloat(o.s)+o.c+(o.s+"").replace(/[0-9\-\.]/g,""):d,h||H.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},S=H._internals={isArray:q,isSelector:I,lazyTweens:K,blobDif:Q},T=H._plugins={},U=S.tweenLookup={},V=0,W=S.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1,stagger:1},X={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},Y=E._rootFramesTimeline=new G,Z=E._rootTimeline=new G,$=30,_=S.lazyRender=function(){var a,b,c=K.length;for(L={},a=0;c>a;a++)b=K[a],b&&b._lazy!==!1&&(b.render(b._lazy[0],b._lazy[1],!0),b._lazy=!1);K.length=0};Z._startTime=j.time,Y._startTime=j.frame,Z._active=Y._active=!0,setTimeout(_,1),E._updateRoot=H.render=function(){var a,b,c;if(K.length&&_(),Z.render((j.time-Z._startTime)*Z._timeScale,!1,!1),Y.render((j.frame-Y._startTime)*Y._timeScale,!1,!1),K.length&&_(),j.frame>=$){$=j.frame+(parseInt(H.autoSleep,10)||120);for(c in U){for(b=U[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete U[c]}if(c=Z._first,(!c||c._paused)&&H.autoSleep&&!Y._first&&1===j._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||j.sleep()}}},j.addEventListener("tick",E._updateRoot);var aa=function(a,b,c){var d,e,f=a._gsTweenID;if(U[f||(a._gsTweenID=f="t"+V++)]||(U[f]={target:a,tweens:[]}),b&&(d=U[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return U[f].tweens},ba=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=H.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},ca=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+n,l=[],m=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||da(b,0,o),0===da(h,j,o)&&(l[m++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2*n||(l[m++]=h)));for(f=m;--f>-1;)if(h=l[f],i=h._firstPT,2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted&&i){if(2!==d&&!ba(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},da=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*n>f-b?n:(f+=a.totalDuration()/a._timeScale/e)>b+n?0:f-b-n};i._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease,l=this._startAt;if(g.startAt){l&&(l.render(-1,!0),l.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.data="isStart",e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,e.onUpdate=g.onUpdate,e.onUpdateParams=g.onUpdateParams,e.onUpdateScope=g.onUpdateScope||g.callbackScope||this,this._startAt=H.to(this.target||{},0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(l)l.render(-1,!0),l.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)W[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=H.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof w?k:"function"==typeof k?new w(k,g.easeParams):x[k]||H.defaultEase:H.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&H._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},i._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;L[b._gsTweenID]&&_(),this.vars.css||b.style&&b!==a&&b.nodeType&&T.css&&this.vars.autoCSS!==!1&&J(this.vars,b);for(g in this.vars)if(l=this.vars[g],W[g])l&&(l instanceof Array||l.push&&q(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(T[g]&&(j=new T[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=R.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&ca(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(L[b._gsTweenID]=!0),i)},i.render=function(a,b,c){var d,e,f,g,h=this,i=h._time,j=h._duration,k=h._rawPrevTime;if(a>=j-n&&a>=0)h._totalTime=h._time=j,h.ratio=h._ease._calcEnd?h._ease.getRatio(1):1,h._reversed||(d=!0,e="onComplete",c=c||h._timeline.autoRemoveChildren),0===j&&(h._initted||!h.vars.lazy||c)&&(h._startTime===h._timeline._duration&&(a=0),(0>k||0>=a&&a>=-n||k===n&&"isPause"!==h.data)&&k!==a&&(c=!0,k>n&&(e="onReverseComplete")),h._rawPrevTime=g=!b||a||k===a?a:n);else if(n>a)h._totalTime=h._time=0,h.ratio=h._ease._calcEnd?h._ease.getRatio(0):0,(0!==i||0===j&&k>0)&&(e="onReverseComplete",d=h._reversed),a>-n?a=0:0>a&&(h._active=!1,0===j&&(h._initted||!h.vars.lazy||c)&&(k>=0&&(k!==n||"isPause"!==h.data)&&(c=!0),h._rawPrevTime=g=!b||a||k===a?a:n)),(!h._initted||h._startAt&&h._startAt.progress())&&(c=!0);else if(h._totalTime=h._time=a,h._easeType){var l=a/j,m=h._easeType,o=h._easePower;(1===m||3===m&&l>=.5)&&(l=1-l),3===m&&(l*=2),1===o?l*=l:2===o?l*=l*l:3===o?l*=l*l*l:4===o&&(l*=l*l*l*l),h.ratio=1===m?1-l:2===m?l:.5>a/j?l/2:1-l/2}else h.ratio=h._ease.getRatio(a/j);if(h._time!==i||c){if(!h._initted){if(h._init(),!h._initted||h._gc)return;if(!c&&h._firstPT&&(h.vars.lazy!==!1&&h._duration||h.vars.lazy&&!h._duration))return h._time=h._totalTime=i,h._rawPrevTime=k,K.push(h),void(h._lazy=[a,b]);h._time&&!d?h.ratio=h._ease.getRatio(h._time/j):d&&h._ease._calcEnd&&(h.ratio=h._ease.getRatio(0===h._time?0:1))}for(h._lazy!==!1&&(h._lazy=!1),h._active||!h._paused&&h._time!==i&&a>=0&&(h._active=!0),0===i&&(h._startAt&&(a>=0?h._startAt.render(a,!0,c):e||(e="_dummyGS")),h.vars.onStart&&(0!==h._time||0===j)&&(b||h._callback("onStart"))),f=h._firstPT;f;)f.f?f.t[f.p](f.c*h.ratio+f.s):f.t[f.p]=f.c*h.ratio+f.s,f=f._next;h._onUpdate&&(0>a&&h._startAt&&a!==-1e-4&&h._startAt.render(a,!0,c),b||(h._time!==i||d||c)&&h._callback("onUpdate")),e&&(!h._gc||c)&&(0>a&&h._startAt&&!h._onUpdate&&a!==-1e-4&&h._startAt.render(a,!0,c),d&&(h._timeline.autoRemoveChildren&&h._enabled(!1,!1),h._active=!1),!b&&h.vars[e]&&h._callback(e),0===j&&h._rawPrevTime===n&&g!==n&&(h._rawPrevTime=0))}},i._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:H.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline,n=this._firstPT;if((q(b)||I(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(H.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!ba(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&n&&this._enabled(!1,!1)}}return i},i.invalidate=function(){this._notifyPluginsOfEnabled&&H._onPluginEvent("_onDisable",this);var a=this._time;return this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],E.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-n,this.render(a,!1,this.vars.lazy!==!1)),this},i._enabled=function(a,b){if(k||j.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=aa(d[c],this,!0);else this._siblings=aa(this.target,this,!0)}return E.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?H._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},H.to=function(a,b,c){return new H(a,b,c)},H.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new H(a,b,c)},H.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new H(a,b,d)},H.delayedCall=function(a,b,c,d,e){return new H(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},H.set=function(a,b){return new H(a,0,b)},H.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:H.selector(a)||a;var c,d,e,f;if((q(a)||I(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(H.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else if(a._gsTweenID)for(d=aa(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d||[]},H.killTweensOf=H.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=H.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ea=u("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ea.prototype},!0);if(i=ea.prototype,ea.version="1.19.0",ea.API=2,i._firstPT=null,i._addTween=R,i.setRatio=O,i._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},i._mod=i._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},H._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ea.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ea.API&&(T[(new a[b])._propName]=a[b]);return!0},t.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=u("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ea.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ea(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ea.activate([g]),g},g=a._gsQueue){for(h=0;h<g.length;h++)g[h]();for(i in r)r[i].func||a.console.log("GSAP encountered missing dependency: "+i)}k=!1}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s=a.group[a.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){a.$refs[t]=o.find(".fancybox-"+t)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===n[e]?t:n[e]})},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),d=i.data()||{},d=n.extend(!0,{},d,d.options),d.$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)}),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio,select")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()})})):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,i=n.fancybox.getTranslate(u),i.top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&(a=i.left*r-(t*r-t),a>0&&(a=0),a<f-h&&(a=f-h)),g>p&&(s=i.top*c-(e*c-e),s>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l*=i,d*=i,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=a.canPan(t,e),i=!!o||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o=this,i=!1,a=o.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=n.fancybox.getTranslate(s),i=i.width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),a.on("refresh.fb",function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{n=e.contents(),o=n.find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}})):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?(e=s.clone().appendTo(s.parent()),e.children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,
"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),!0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.7",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://www.youtube-nocookie.com/embed/$4",thumb:"https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)});var o={youtube:{src:"https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;if(this[t].loaded)return void setTimeout(function(){n.done(t)});this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o),i.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;if(!n)return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e),n.isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},
tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:e,index:o<1?1:o,gallery:i}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,""!==(n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(e).on({"onInit.fb":function(t,e){var n,i;!1!==e.group[e.currIndex].opts.hash&&(n=o(),(i=a(e))&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&!1!==i.opts.hash&&(r=a(o))&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300)))},"beforeClose.fb":function(n,o,i){i&&!1!==i.opts.hash&&(clearTimeout(o.hashTimer),o.currentHash&&o.hasCreatedHistory?t.history.back():o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);
/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){!function(t){var o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",i="cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+n+"//"+i+"%3E%3C/script%3E"))),t()}(function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),n&&i.callbacks.onCreate&&"function"==typeof i.callbacks.onCreate&&i.callbacks.onCreate.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=e("#mCSB_"+n.idx),s=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&Q(t),o&&n&&i.callbacks.onBeforeUpdate&&"function"==typeof i.callbacks.onBeforeUpdate&&i.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),l.css("max-height","none"),l.height()!==t.height()&&l.css("max-height",t.height()),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r)),n.overflowed=y.call(this),M.call(this),i.autoDraggerLength&&S.call(this),b.call(this),T.call(this);var c=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?s[0].height()>s[0].parent().height()?B.call(this):(G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(B.call(this),"y"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[1]&&G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?s[1].width()>s[1].parent().width()?B.call(this):(G(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(B.call(this),"x"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[0]&&G(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),N.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=Y.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=X.call(this,c[0],"y"),c[1]=X.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=ne()?0:d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",G(n,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",G(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&Q(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(a)){o.data(a);N.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),o.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),N.call(this,"remove"),k.call(this),B.call(this),n.removeData(a),$(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),$(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir='"+n.langDir+"' /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p)),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){var o=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],a=t.parent().width();return o[0]>a?o[0]:o[1]>a?o[1]:"100%"},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");if(n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis){i.css({width:"auto","min-width":0,"overflow-x":"scroll"});var r=Math.ceil(i[0].scrollWidth);3===n.advanced.autoExpandHorizontalScroll||2!==n.advanced.autoExpandHorizontalScroll&&r>i.parent().width()?i.css({width:r,"min-width":"100%","overflow-x":"inherit"}):i.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=oe(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' "+r+" />","<a href='#' class='"+d[14]+"' "+r+" />","<a href='#' class='"+d[15]+"' "+r+" />","<a href='#' class='"+d[16]+"' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},C=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},y=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1),s=i[0].scrollHeight,c=i[0].scrollWidth;return s>r&&(r=s),c>l&&(l=c),[r>n.height(),l>n.width()]},B=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(Q(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),G(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),G(t,"_resetX")}},T=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),W.call(o[0])):t()},100)}var o=e(this),n=o.data(a),i=n.opt;if(!n.bindEvents){if(I.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable){var r;t()}P.call(this),U.call(this),i.advanced.autoScrollOnFocus&&H.call(this),i.scrollButtons.enable&&F.call(this),i.keyboard.enable&&q.call(this),n.bindEvents=!0}},k=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),n.advanced.extraDraggableSelectors&&l.add(e(n.advanced.extraDraggableSelectors)),o.bindEvents&&(e(document).add(e(!A()||top.document)).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),$(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),$(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),$(s[0],"onCompleteTimeout"),o.bindEvents=!1)},M=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},O=function(t){var o=t.type,a=t.target.ownerDocument!==document&&null!==frameElement?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=A()&&t.target.ownerDocument!==top.document&&null!==frameElement?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(o){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return a?[t.originalEvent.pageY-a[0]+n[0],t.originalEvent.pageX-a[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],r=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[i.screenY,i.screenX,r>1]:[i.pageY,i.pageX,r>1];default:return a?[t.pageY-a[0]+n[0],t.pageX-a[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},I=function(){function t(e,t,a,n){if(h[0].idleTimer=d.scrollInertia<233?250:0,o.attr("id")===f[1])var i="x",s=(o[0].offsetLeft-t+n)*l.scrollRatio.x;else var i="y",s=(o[0].offsetTop-e+a)*l.scrollRatio.y;G(r,s.toString(),{dir:i,drag:!0})}var o,n,i,r=e(this),l=r.data(a),d=l.opt,u=a+"_"+l.idx,f=["mCSB_"+l.idx+"_dragger_vertical","mCSB_"+l.idx+"_dragger_horizontal"],h=e("#mCSB_"+l.idx+"_container"),m=e("#"+f[0]+",#"+f[1]),p=d.advanced.releaseDraggableSelectors?m.add(e(d.advanced.releaseDraggableSelectors)):m,g=d.advanced.extraDraggableSelectors?e(!A()||top.document).add(e(d.advanced.extraDraggableSelectors)):e(!A()||top.document);m.bind("contextmenu."+u,function(e){e.preventDefault()}).bind("mousedown."+u+" touchstart."+u+" pointerdown."+u+" MSPointerDown."+u,function(t){if(t.stopImmediatePropagation(),t.preventDefault(),ee(t)){c=!0,s&&(document.onselectstart=function(){return!1}),L.call(h,!1),Q(r),o=e(this);var a=o.offset(),l=O(t)[0]-a.top,u=O(t)[1]-a.left,f=o.height()+a.top,m=o.width()+a.left;f>l&&l>0&&m>u&&u>0&&(n=l,i=u),C(o,"active",d.autoExpandScrollbar)}}).bind("touchmove."+u,function(e){e.stopImmediatePropagation(),e.preventDefault();var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;t(n,i,r,l)}),e(document).add(g).bind("mousemove."+u+" pointermove."+u+" MSPointerMove."+u,function(e){if(o){var a=o.offset(),r=O(e)[0]-a.top,l=O(e)[1]-a.left;if(n===r&&i===l)return;t(n,i,r,l)}}).add(p).bind("mouseup."+u+" touchend."+u+" pointerup."+u+" MSPointerUp."+u,function(){o&&(C(o,"active",d.autoExpandScrollbar),o=null),c=!1,s&&(document.onselectstart=null),L.call(h,!0)})},D=function(){function o(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,b=0,C=0,d=1,y.removeClass("mCS_touch_action");var o=I.offset();u=O(e)[0]-o.top,f=O(e)[1]-o.left,z=[O(e)[0],O(e)[1]]}function n(e){if(te(e)&&!c&&!O(e)[2]&&(T.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!C||b)&&d)){g=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left,n="mcsLinearOut";if(E.push(o),W.push(a),z[2]=Math.abs(O(e)[0]-z[0]),z[3]=Math.abs(O(e)[1]-z[1]),B.overflowed[0])var i=D[0].parent().height()-D[0].height(),r=u-o>0&&o-u>-(i*B.scrollRatio.y)&&(2*z[3]<z[2]||"yx"===T.axis);if(B.overflowed[1])var l=D[1].parent().width()-D[1].width(),h=f-a>0&&a-f>-(l*B.scrollRatio.x)&&(2*z[2]<z[3]||"yx"===T.axis);r||h?(U||e.preventDefault(),b=1):(C=1,y.addClass("mCS_touch_action")),U&&e.preventDefault(),w="yx"===T.axis?[u-o,f-a]:"x"===T.axis?[null,f-a]:[u-o,null],I[0].idleTimer=250,B.overflowed[0]&&s(w[0],R,n,"y","all",!0),B.overflowed[1]&&s(w[1],R,n,"x",L,!0)}}function i(e){if(!te(e)||c||O(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),Q(y),p=K();var o=M.offset();h=O(e)[0]-o.top,m=O(e)[1]-o.left,E=[],W=[]}function r(e){if(te(e)&&!c&&!O(e)[2]){d=0,e.stopImmediatePropagation(),b=0,C=0,v=K();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left;if(!(v-g>30)){_=1e3/(v-p);var n="mcsEaseOut",i=2.5>_,r=i?[E[E.length-2],W[W.length-2]]:[0,0];x=i?[o-r[0],a-r[1]]:[o-h,a-m];var u=[Math.abs(x[0]),Math.abs(x[1])];_=i?[Math.abs(x[0]/4),Math.abs(x[1]/4)]:[_,_];var f=[Math.abs(I[0].offsetTop)-x[0]*l(u[0]/_[0],_[0]),Math.abs(I[0].offsetLeft)-x[1]*l(u[1]/_[1],_[1])];w="yx"===T.axis?[f[0],f[1]]:"x"===T.axis?[null,f[1]]:[f[0],null],S=[4*u[0]+T.scrollInertia,4*u[1]+T.scrollInertia];var y=parseInt(T.contentTouchScroll)||0;w[0]=u[0]>y?w[0]:0,w[1]=u[1]>y?w[1]:0,B.overflowed[0]&&s(w[0],S[0],n,"y",L,!1),B.overflowed[1]&&s(w[1],S[1],n,"x",L,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&G(y,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C,y=e(this),B=y.data(a),T=B.opt,k=a+"_"+B.idx,M=e("#mCSB_"+B.idx),I=e("#mCSB_"+B.idx+"_container"),D=[e("#mCSB_"+B.idx+"_dragger_vertical"),e("#mCSB_"+B.idx+"_dragger_horizontal")],E=[],W=[],R=0,L="yx"===T.axis?"none":"all",z=[],P=I.find("iframe"),H=["touchstart."+k+" pointerdown."+k+" MSPointerDown."+k,"touchmove."+k+" pointermove."+k+" MSPointerMove."+k,"touchend."+k+" pointerup."+k+" MSPointerUp."+k],U=void 0!==document.body.style.touchAction&&""!==document.body.style.touchAction;I.bind(H[0],function(e){o(e)}).bind(H[1],function(e){n(e)}),M.bind(H[0],function(e){i(e)}).bind(H[2],function(e){r(e)}),P.length&&P.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(H[0],function(e){o(e),i(e)}).bind(H[1],function(e){n(e)}).bind(H[2],function(e){r(e)})})})},E=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,j(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&o()){var a=f.offset(),r=O(e)[0]-a.top+f[0].offsetTop,c=O(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u+" dragend."+u,function(){t||(i&&(i=0,n("off",null)),c=!1)})},W=function(){function t(t,a){if(Q(o),!z(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100,d=i.scrollInertia;if("x"===i.axis||"x"===i.mouseWheel.axis)var u="x",f=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.width()?.9*l.width():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),p=c[1][0].offsetLeft,g=c[1].parent().width()-c[1].width(),v="y"===i.mouseWheel.axis?t.deltaY||a:t.deltaX;else var u="y",f=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.height()?.9*l.height():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),p=c[0][0].offsetTop,g=c[0].parent().height()-c[0].height(),v=t.deltaY||a;"y"===u&&!n.overflowed[0]||"x"===u&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(v=-v),i.mouseWheel.normalizeDelta&&(v=0>v?-1:1),(v>0&&0!==p||0>v&&p!==g||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),t.deltaFactor<5&&!i.mouseWheel.normalizeDelta&&(h=t.deltaFactor,d=17),G(o,(m-v*h).toString(),{dir:u,dur:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},R=new Object,A=function(t){var o=!1,a=!1,n=null;if(void 0===t?a="#empty":void 0!==e(t).attr("id")&&(a=e(t).attr("id")),a!==!1&&void 0!==R[a])return R[a];if(t){try{var i=t.contentDocument||t.contentWindow.document;n=i.body.innerHTML}catch(r){}o=null!==n}else{try{var i=top.document;n=i.body.innerHTML}catch(r){}o=null!==n}return a!==!1&&(R[a]=o),o},L=function(e){var t=this.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}},z=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(n,i)>-1&&!(e.inArray(n,r)>-1&&!e(o).is(":focus"))},P=function(){var t,o=e(this),n=o.data(a),i=a+"_"+n.idx,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=e(".mCSB_"+n.idx+"_scrollbar ."+d[12]);s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(o){c=!0,e(o.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(){c=!1}).bind("click."+i,function(a){if(t&&(t=0,e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail"))){Q(o);var i=e(this),s=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!n.overflowed[1])return;var c="x",u=a.pageX>s.offset().left?-1:1,f=Math.abs(r[0].offsetLeft)-u*(.9*l.width())}else{if(!n.overflowed[0])return;var c="y",u=a.pageY>s.offset().top?-1:1,f=Math.abs(r[0].offsetTop)-u*(.9*l.height())}G(o,f.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},H=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(){var o=e(document.activeElement),a=r.find(".mCustomScrollBox").length,i=0;o.is(n.advanced.autoScrollOnFocus)&&(Q(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=a?(i+17)*a:0,t[0]._focusTimeout=setTimeout(function(){var e=[ae(o)[0],ae(o)[1]],a=[r[0].offsetTop,r[0].offsetLeft],s=[a[0]+e[0]>=0&&a[0]+e[0]<l.height()-o.outerHeight(!1),a[1]+e[1]>=0&&a[0]+e[1]<l.width()-o.outerWidth(!1)],c="yx"!==n.axis||s[0]||s[1]?"all":"none";"x"===n.axis||s[0]||G(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i}),"y"===n.axis||s[1]||G(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:i})},t[0]._focusTimer))})},U=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(){0===i.scrollTop()&&0===i.scrollLeft()||e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},F=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("contextmenu."+r,function(e){e.preventDefault()}).bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.scrollButtons.scrollAmount,j(t,e,o)}if(a.preventDefault(),ee(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},q=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||j(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){Q(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-f*(.9*d.width());else var h="y",m=Math.abs(c[0].offsetTop)-f*(.9*d.height());G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;G(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).bind("load",function(){A(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},j=function(t,o,n,i,r){function l(e){u.snapAmount&&(f.scrollAmount=u.snapAmount instanceof Array?"x"===f.dir[0]?u.snapAmount[1]:u.snapAmount[0]:u.snapAmount);var o="stepped"!==f.type,a=r?r:e?o?p/1.5:g:1e3/60,n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],m="x"===f.dir[0]?s[1]+f.dir[1]*(d[1]*n):s[0]+f.dir[1]*(d[0]*n),v="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),x="auto"!==f.scrollAmount?v:m,_=i?i:e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",w=!!e;return e&&17>a&&(x="x"===f.dir[0]?s[1]:s[0]),G(t,x.toString(),{dir:f.dir[0],scrollEasing:_,dur:a,onComplete:w}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}function s(){clearTimeout(f.step),$(f,"step"),Q(t)}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],Q(t),oe(n)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},Y=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},X=function(t,o){if(null!=t&&"undefined"!=typeof t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1)-s.width():l.outerHeight(!1)-s.height(),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?ae(m)[1]:ae(m)[0];case"string":case"number":if(oe(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&oe(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?ae(m)[1]:ae(m)[0]}return e(t).length?"x"===o?ae(e(t))[1]:ae(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},N=function(t){function o(){return clearTimeout(f[0].autoUpdate),0===l.parents("html").length?void(l=null):void(f[0].autoUpdate=setTimeout(function(){return c.advanced.updateOnSelectorChange&&(s.poll.change.n=i(),s.poll.change.n!==s.poll.change.o)?(s.poll.change.o=s.poll.change.n,void r(3)):c.advanced.updateOnContentResize&&(s.poll.size.n=l[0].scrollHeight+l[0].scrollWidth+f[0].offsetHeight+l[0].offsetHeight+l[0].offsetWidth,s.poll.size.n!==s.poll.size.o)?(s.poll.size.o=s.poll.size.n,void r(1)):!c.advanced.updateOnImageLoad||"auto"===c.advanced.updateOnImageLoad&&"y"===c.axis||(s.poll.img.n=f.find("img").length,s.poll.img.n===s.poll.img.o)?void((c.advanced.updateOnSelectorChange||c.advanced.updateOnContentResize||c.advanced.updateOnImageLoad)&&o()):(s.poll.img.o=s.poll.img.n,void f.find("img").each(function(){n(this)}))},c.advanced.autoUpdateTimeout))}function n(t){function o(e,t){return function(){
return t.apply(e,arguments)}}function a(){this.onload=null,e(t).addClass(d[2]),r(2)}if(e(t).hasClass(d[2]))return void r();var n=new Image;n.onload=o(n,a),n.src=t.src}function i(){c.advanced.updateOnSelectorChange===!0&&(c.advanced.updateOnSelectorChange="*");var e=0,t=f.find(c.advanced.updateOnSelectorChange);return c.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}function r(e){clearTimeout(f[0].autoUpdate),u.update.call(null,l[0],e)}var l=e(this),s=l.data(a),c=s.opt,f=e("#mCSB_"+s.idx+"_container");return t?(clearTimeout(f[0].autoUpdate),void $(f[0],"autoUpdate")):void o()},V=function(e,t,o){return Math.round(e/t)*t-o},Q=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){Z.call(this)})},G=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||w>=S[0]+y,c.callbacks.alwaysTriggerOffsets||-B>=w]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?Y.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?Y.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,0===m.scrollTop()&&0===m.scrollLeft()||(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===n.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;o=V(o,v,c.snapOffset)}switch(n.dir){case"x":var x=e("#mCSB_"+s.idx+"_dragger_horizontal"),_="left",w=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/s.scrollRatio.x],y=p[1],B=g[1],T=y>0?y/s.scrollRatio.x:0,k=B>0?B/s.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+s.idx+"_dragger_vertical"),_="top",w=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/s.scrollRatio.y],y=p[0],B=g[0],T=y>0?y/s.scrollRatio.y:0,k=B>0?B/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),J(x[0],_,Math.round(b[1]),u[1],n.scrollEasing),!s.tweenRunning&&(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0])||J(h[0],_,Math.round(b[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,C(x),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&b[1]>=S[1]-T&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&b[1]<=k&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,C(x,"hide")},e)}}})}},J=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=K()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=K(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},K=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},Z=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},$=function(e,t){try{delete e[t]}catch(o){e[t]=null}},ee=function(e){return!(e.which&&1!==e.which)},te=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},oe=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},ae=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},ne=function(){function e(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}var t=e();return t?document[t]:!1};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).bind("load",function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+ae(n)[0]>=0&&a[0]+ae(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+ae(n)[1]>=0&&a[1]+ae(n)[1]<o.width()-n.outerWidth(!1)},mcsInSight:e.expr[":"].mcsInSight||function(t,o,a){var n,i,r,l,s=e(t),c=s.parents(".mCSB_container"),d="exact"===a[3]?[[1,0],[1,0]]:[[.9,.1],[.6,.4]];if(c.length)return n=[s.outerHeight(!1),s.outerWidth(!1)],r=[c[0].offsetTop+ae(s)[0],c[0].offsetLeft+ae(s)[1]],i=[c.parent()[0].offsetHeight,c.parent()[0].offsetWidth],l=[n[0]<i[0]?d[0]:d[1],n[1]<i[1]?d[0]:d[1]],r[0]-i[0]*l[0][0]<0&&r[0]+n[0]-i[0]*l[0][1]>=0&&r[1]-i[1]*l[1][0]<0&&r[1]+n[1]-i[1]*l[1][1]>=0},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});
/*!
 * Bootstrap-select v1.13.11 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2019 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */

!function(e,t){void 0===e&&void 0!==window&&(e=window),"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery")):t(e.jQuery)}(this,function(e){!function(z){"use strict";var d=["sanitize","whiteList","sanitizeFn"],r=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],e={"*":["class","dir","id","lang","role","tabindex","style",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},l=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,a=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function v(e,t){var i=e.nodeName.toLowerCase();if(-1!==z.inArray(i,t))return-1===z.inArray(i,r)||Boolean(e.nodeValue.match(l)||e.nodeValue.match(a));for(var s=z(t).filter(function(e,t){return t instanceof RegExp}),n=0,o=s.length;n<o;n++)if(i.match(s[n]))return!0;return!1}function B(e,t,i){if(i&&"function"==typeof i)return i(e);for(var s=Object.keys(t),n=0,o=e.length;n<o;n++)for(var r=e[n].querySelectorAll("*"),l=0,a=r.length;l<a;l++){var c=r[l],d=c.nodeName.toLowerCase();if(-1!==s.indexOf(d))for(var h=[].slice.call(c.attributes),p=[].concat(t["*"]||[],t[d]||[]),u=0,f=h.length;u<f;u++){var m=h[u];v(m,p)||c.removeAttribute(m.nodeName)}else c.parentNode.removeChild(c)}}"classList"in document.createElement("_")||function(e){if("Element"in e){var t="classList",i="prototype",s=e.Element[i],n=Object,o=function(){var i=z(this);return{add:function(e){return e=Array.prototype.slice.call(arguments).join(" "),i.addClass(e)},remove:function(e){return e=Array.prototype.slice.call(arguments).join(" "),i.removeClass(e)},toggle:function(e,t){return i.toggleClass(e,t)},contains:function(e){return i.hasClass(e)}}};if(n.defineProperty){var r={get:o,enumerable:!0,configurable:!0};try{n.defineProperty(s,t,r)}catch(e){void 0!==e.number&&-2146823252!==e.number||(r.enumerable=!1,n.defineProperty(s,t,r))}}else n[i].__defineGetter__&&s.__defineGetter__(t,o)}}(window);var t,c,i,s=document.createElement("_");if(s.classList.add("c1","c2"),!s.classList.contains("c2")){var n=DOMTokenList.prototype.add,o=DOMTokenList.prototype.remove;DOMTokenList.prototype.add=function(){Array.prototype.forEach.call(arguments,n.bind(this))},DOMTokenList.prototype.remove=function(){Array.prototype.forEach.call(arguments,o.bind(this))}}if(s.classList.toggle("c3",!1),s.classList.contains("c3")){var h=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:h.call(this,e)}}function O(e,t){var i,s=e.selectedOptions,n=[];if(t){for(var o=0,r=s.length;o<r;o++)(i=s[o]).disabled||"OPTGROUP"===i.parentNode.tagName&&i.parentNode.disabled||n.push(i);return n}return s}function T(e,t){for(var i,s=[],n=t||e.selectedOptions,o=0,r=n.length;o<r;o++)(i=n[o]).disabled||"OPTGROUP"===i.parentNode.tagName&&i.parentNode.disabled||s.push(i.value||i.text);return e.multiple?s:s.length?s[0]:null}s=null,String.prototype.startsWith||(t=function(){try{var e={},t=Object.defineProperty,i=t(e,e,e)&&t}catch(e){}return i}(),c={}.toString,i=function(e){if(null==this)throw new TypeError;var t=String(this);if(e&&"[object RegExp]"==c.call(e))throw new TypeError;var i=t.length,s=String(e),n=s.length,o=1<arguments.length?arguments[1]:void 0,r=o?Number(o):0;r!=r&&(r=0);var l=Math.min(Math.max(r,0),i);if(i<n+l)return!1;for(var a=-1;++a<n;)if(t.charCodeAt(l+a)!=s.charCodeAt(a))return!1;return!0},t?t(String.prototype,"startsWith",{value:i,configurable:!0,writable:!0}):String.prototype.startsWith=i),Object.keys||(Object.keys=function(e,t,i){for(t in i=[],e)i.hasOwnProperty.call(e,t)&&i.push(t);return i}),HTMLSelectElement&&!HTMLSelectElement.prototype.hasOwnProperty("selectedOptions")&&Object.defineProperty(HTMLSelectElement.prototype,"selectedOptions",{get:function(){return this.querySelectorAll(":checked")}});var p={useDefault:!1,_set:z.valHooks.select.set};z.valHooks.select.set=function(e,t){return t&&!p.useDefault&&z(e).data("selected",!0),p._set.apply(this,arguments)};var A=null,u=function(){try{return new Event("change"),!0}catch(e){return!1}}();function k(e,t,i,s){for(var n=["display","subtext","tokens"],o=!1,r=0;r<n.length;r++){var l=n[r],a=e[l];if(a&&(a=a.toString(),"display"===l&&(a=a.replace(/<[^>]+>/g,"")),s&&(a=w(a)),a=a.toUpperCase(),o="contains"===i?0<=a.indexOf(t):a.startsWith(t)))break}return o}function L(e){return parseInt(e,10)||0}z.fn.triggerNative=function(e){var t,i=this[0];i.dispatchEvent?(u?t=new Event(e,{bubbles:!0}):(t=document.createEvent("Event")).initEvent(e,!0,!1),i.dispatchEvent(t)):i.fireEvent?((t=document.createEventObject()).eventType=e,i.fireEvent("on"+e,t)):this.trigger(e)};var f={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"},m=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,g=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]","g");function b(e){return f[e]}function w(e){return(e=e.toString())&&e.replace(m,b).replace(g,"")}var I,x,$,y,S,E=(I={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},x=function(e){return I[e]},$="(?:"+Object.keys(I).join("|")+")",y=RegExp($),S=RegExp($,"g"),function(e){return e=null==e?"":""+e,y.test(e)?e.replace(S,x):e}),C={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"},N=27,D=13,H=32,P=9,W=38,M=40,R={success:!1,major:"3"};try{R.full=(z.fn.dropdown.Constructor.VERSION||"").split(" ")[0].split("."),R.major=R.full[0],R.success=!0}catch(e){}var U=0,j=".bs.select",V={DISABLED:"disabled",DIVIDER:"divider",SHOW:"open",DROPUP:"dropup",MENU:"dropdown-menu",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left",BUTTONCLASS:"btn-default",POPOVERHEADER:"popover-title",ICONBASE:"glyphicon",TICKICON:"glyphicon-ok"},F={MENU:"."+V.MENU},_={span:document.createElement("span"),i:document.createElement("i"),subtext:document.createElement("small"),a:document.createElement("a"),li:document.createElement("li"),whitespace:document.createTextNode("\xa0"),fragment:document.createDocumentFragment()};_.a.setAttribute("role","option"),_.subtext.className="text-muted",_.text=_.span.cloneNode(!1),_.text.className="text",_.checkMark=_.span.cloneNode(!1);var G=new RegExp(W+"|"+M),q=new RegExp("^"+P+"$|"+N),K=function(e,t,i){var s=_.li.cloneNode(!1);return e&&(1===e.nodeType||11===e.nodeType?s.appendChild(e):s.innerHTML=e),void 0!==t&&""!==t&&(s.className=t),null!=i&&s.classList.add("optgroup-"+i),s},Y=function(e,t,i){var s=_.a.cloneNode(!0);return e&&(11===e.nodeType?s.appendChild(e):s.insertAdjacentHTML("beforeend",e)),void 0!==t&&""!==t&&(s.className=t),"4"===R.major&&s.classList.add("dropdown-item"),i&&s.setAttribute("style",i),s},Z=function(e,t){var i,s,n=_.text.cloneNode(!1);if(e.content)n.innerHTML=e.content;else{if(n.textContent=e.text,e.icon){var o=_.whitespace.cloneNode(!1);(s=(!0===t?_.i:_.span).cloneNode(!1)).className=e.iconBase+" "+e.icon,_.fragment.appendChild(s),_.fragment.appendChild(o)}e.subtext&&((i=_.subtext.cloneNode(!1)).textContent=e.subtext,n.appendChild(i))}if(!0===t)for(;0<n.childNodes.length;)_.fragment.appendChild(n.childNodes[0]);else _.fragment.appendChild(n);return _.fragment},J=function(e){var t,i,s=_.text.cloneNode(!1);if(s.innerHTML=e.label,e.icon){var n=_.whitespace.cloneNode(!1);(i=_.span.cloneNode(!1)).className=e.iconBase+" "+e.icon,_.fragment.appendChild(i),_.fragment.appendChild(n)}return e.subtext&&((t=_.subtext.cloneNode(!1)).textContent=e.subtext,s.appendChild(t)),_.fragment.appendChild(s),_.fragment},Q=function(e,t){var i=this;p.useDefault||(z.valHooks.select.set=p._set,p.useDefault=!0),this.$element=z(e),this.$newElement=null,this.$button=null,this.$menu=null,this.options=t,this.selectpicker={main:{},search:{},current:{},view:{},keydown:{keyHistory:"",resetKeyHistory:{start:function(){return setTimeout(function(){i.selectpicker.keydown.keyHistory=""},800)}}}},null===this.options.title&&(this.options.title=this.$element.attr("title"));var s=this.options.windowPadding;"number"==typeof s&&(this.options.windowPadding=[s,s,s,s]),this.val=Q.prototype.val,this.render=Q.prototype.render,this.refresh=Q.prototype.refresh,this.setStyle=Q.prototype.setStyle,this.selectAll=Q.prototype.selectAll,this.deselectAll=Q.prototype.deselectAll,this.destroy=Q.prototype.destroy,this.remove=Q.prototype.remove,this.show=Q.prototype.show,this.hide=Q.prototype.hide,this.init()};function X(e){var l,a=arguments,c=e;if([].shift.apply(a),!R.success){try{R.full=(z.fn.dropdown.Constructor.VERSION||"").split(" ")[0].split(".")}catch(e){Q.BootstrapVersion?R.full=Q.BootstrapVersion.split(" ")[0].split("."):(R.full=[R.major,"0","0"],console.warn("There was an issue retrieving Bootstrap's version. Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.",e))}R.major=R.full[0],R.success=!0}if("4"===R.major){var t=[];Q.DEFAULTS.style===V.BUTTONCLASS&&t.push({name:"style",className:"BUTTONCLASS"}),Q.DEFAULTS.iconBase===V.ICONBASE&&t.push({name:"iconBase",className:"ICONBASE"}),Q.DEFAULTS.tickIcon===V.TICKICON&&t.push({name:"tickIcon",className:"TICKICON"}),V.DIVIDER="dropdown-divider",V.SHOW="show",V.BUTTONCLASS="btn-light",V.POPOVERHEADER="popover-header",V.ICONBASE="",V.TICKICON="bs-ok-default";for(var i=0;i<t.length;i++){e=t[i];Q.DEFAULTS[e.name]=V[e.className]}}var s=this.each(function(){var e=z(this);if(e.is("select")){var t=e.data("selectpicker"),i="object"==typeof c&&c;if(t){if(i)for(var s in i)i.hasOwnProperty(s)&&(t.options[s]=i[s])}else{var n=e.data();for(var o in n)n.hasOwnProperty(o)&&-1!==z.inArray(o,d)&&delete n[o];var r=z.extend({},Q.DEFAULTS,z.fn.selectpicker.defaults||{},n,i);r.template=z.extend({},Q.DEFAULTS.template,z.fn.selectpicker.defaults?z.fn.selectpicker.defaults.template:{},n.template,i.template),e.data("selectpicker",t=new Q(this,r))}"string"==typeof c&&(l=t[c]instanceof Function?t[c].apply(t,a):t.options[c])}});return void 0!==l?l:s}Q.VERSION="1.13.11",Q.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(e,t){return 1==e?"{0} item selected":"{0} items selected"},maxOptionsText:function(e,t){return[1==e?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==t?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:V.BUTTONCLASS,size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:V.ICONBASE,tickIcon:V.TICKICON,showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1,windowPadding:0,virtualScroll:600,display:!1,sanitize:!0,sanitizeFn:null,whiteList:e},Q.prototype={constructor:Q,init:function(){var i=this,e=this.$element.attr("id");U++,this.selectId="bs-select-"+U,this.$element[0].classList.add("bs-select-hidden"),this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$element[0].classList.contains("show-tick")&&(this.options.showTick=!0),this.$newElement=this.createDropdown(),this.$element.after(this.$newElement).prependTo(this.$newElement),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(F.MENU),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),this.$element[0].classList.remove("bs-select-hidden"),!0===this.options.dropdownAlignRight&&this.$menu[0].classList.add(V.MENURIGHT),void 0!==e&&this.$button.attr("data-id",e),this.checkDisabled(),this.clickListener(),this.options.liveSearch?(this.liveSearchListener(),this.focusedParent=this.$searchbox[0]):this.focusedParent=this.$menuInner[0],this.setStyle(),this.render(),this.setWidth(),this.options.container?this.selectPosition():this.$element.on("hide"+j,function(){if(i.isVirtual()){var e=i.$menuInner[0],t=e.firstChild.cloneNode(!1);e.replaceChild(t,e.firstChild),e.scrollTop=0}}),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(e){i.$element.trigger("hide"+j,e)},"hidden.bs.dropdown":function(e){i.$element.trigger("hidden"+j,e)},"show.bs.dropdown":function(e){i.$element.trigger("show"+j,e)},"shown.bs.dropdown":function(e){i.$element.trigger("shown"+j,e)}}),i.$element[0].hasAttribute("required")&&this.$element.on("invalid"+j,function(){i.$button[0].classList.add("bs-invalid"),i.$element.on("shown"+j+".invalid",function(){i.$element.val(i.$element.val()).off("shown"+j+".invalid")}).on("rendered"+j,function(){this.validity.valid&&i.$button[0].classList.remove("bs-invalid"),i.$element.off("rendered"+j)}),i.$button.on("blur"+j,function(){i.$element.trigger("focus").trigger("blur"),i.$button.off("blur"+j)})}),setTimeout(function(){i.createLi(),i.$element.trigger("loaded"+j)})},createDropdown:function(){var e=this.multiple||this.options.showTick?" show-tick":"",t=this.multiple?' aria-multiselectable="true"':"",i="",s=this.autofocus?" autofocus":"";R.major<4&&this.$element.parent().hasClass("input-group")&&(i=" input-group-btn");var n,o="",r="",l="",a="";return this.options.header&&(o='<div class="'+V.POPOVERHEADER+'"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>"),this.options.liveSearch&&(r='<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+E(this.options.liveSearchPlaceholder)+'"')+' role="combobox" aria-label="Search" aria-controls="'+this.selectId+'" aria-autocomplete="list"></div>'),this.multiple&&this.options.actionsBox&&(l='<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn '+V.BUTTONCLASS+'">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn '+V.BUTTONCLASS+'">'+this.options.deselectAllText+"</button></div></div>"),this.multiple&&this.options.doneButton&&(a='<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm '+V.BUTTONCLASS+'">'+this.options.doneButtonText+"</button></div></div>"),n='<div class="dropdown bootstrap-select'+e+i+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" '+("static"===this.options.display?'data-display="static"':"")+'data-toggle="dropdown"'+s+' role="combobox" aria-owns="'+this.selectId+'" aria-haspopup="listbox" aria-expanded="false"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner"></div></div> </div>'+("4"===R.major?"":'<span class="bs-caret">'+this.options.template.caret+"</span>")+'</button><div class="'+V.MENU+" "+("4"===R.major?"":V.SHOW)+'">'+o+r+l+'<div class="inner '+V.SHOW+'" role="listbox" id="'+this.selectId+'" tabindex="-1" '+t+'><ul class="'+V.MENU+" inner "+("4"===R.major?V.SHOW:"")+'" role="presentation"></ul></div>'+a+"</div></div>",z(n)},setPositionData:function(){this.selectpicker.view.canHighlight=[];for(var e=this.selectpicker.view.size=0;e<this.selectpicker.current.data.length;e++){var t=this.selectpicker.current.data[e],i=!0;"divider"===t.type?(i=!1,t.height=this.sizeInfo.dividerHeight):"optgroup-label"===t.type?(i=!1,t.height=this.sizeInfo.dropdownHeaderHeight):t.height=this.sizeInfo.liHeight,t.disabled&&(i=!1),this.selectpicker.view.canHighlight.push(i),i&&(this.selectpicker.view.size++,t.posinset=this.selectpicker.view.size),t.position=(0===e?0:this.selectpicker.current.data[e-1].position)+t.height}},isVirtual:function(){return!1!==this.options.virtualScroll&&this.selectpicker.main.elements.length>=this.options.virtualScroll||!0===this.options.virtualScroll},createView:function(N,e,t){var D,H,P=this,i=0,W=[];if(this.selectpicker.current=N?this.selectpicker.search:this.selectpicker.main,this.setPositionData(),e)if(t)i=this.$menuInner[0].scrollTop;else if(!P.multiple){var s=P.$element[0],n=(s.options[s.selectedIndex]||{}).liIndex;if("number"==typeof n&&!1!==P.options.size){var o=P.selectpicker.main.data[n],r=o&&o.position;r&&(i=r-(P.sizeInfo.menuInnerHeight+P.sizeInfo.liHeight)/2)}}function l(e,t){var i,s,n,o,r,l,a,c,d,h,p=P.selectpicker.current.elements.length,u=[],f=!0,m=P.isVirtual();P.selectpicker.view.scrollTop=e,i=Math.ceil(P.sizeInfo.menuInnerHeight/P.sizeInfo.liHeight*1.5),s=Math.round(p/i)||1;for(var v=0;v<s;v++){var g=(v+1)*i;if(v===s-1&&(g=p),u[v]=[v*i+(v?1:0),g],!p)break;void 0===r&&e-1<=P.selectpicker.current.data[g-1].position-P.sizeInfo.menuInnerHeight&&(r=v)}if(void 0===r&&(r=0),l=[P.selectpicker.view.position0,P.selectpicker.view.position1],n=Math.max(0,r-1),o=Math.min(s-1,r+1),P.selectpicker.view.position0=!1===m?0:Math.max(0,u[n][0])||0,P.selectpicker.view.position1=!1===m?p:Math.min(p,u[o][1])||0,a=l[0]!==P.selectpicker.view.position0||l[1]!==P.selectpicker.view.position1,void 0!==P.activeIndex&&(H=P.selectpicker.main.elements[P.prevActiveIndex],W=P.selectpicker.main.elements[P.activeIndex],D=P.selectpicker.main.elements[P.selectedIndex],t&&(P.activeIndex!==P.selectedIndex&&P.defocusItem(W),P.activeIndex=void 0),P.activeIndex&&P.activeIndex!==P.selectedIndex&&P.defocusItem(D)),void 0!==P.prevActiveIndex&&P.prevActiveIndex!==P.activeIndex&&P.prevActiveIndex!==P.selectedIndex&&P.defocusItem(H),(t||a)&&(c=P.selectpicker.view.visibleElements?P.selectpicker.view.visibleElements.slice():[],P.selectpicker.view.visibleElements=!1===m?P.selectpicker.current.elements:P.selectpicker.current.elements.slice(P.selectpicker.view.position0,P.selectpicker.view.position1),P.setOptionStatus(),(N||!1===m&&t)&&(d=c,h=P.selectpicker.view.visibleElements,f=!(d.length===h.length&&d.every(function(e,t){return e===h[t]}))),(t||!0===m)&&f)){var b,w,I=P.$menuInner[0],x=document.createDocumentFragment(),k=I.firstChild.cloneNode(!1),$=P.selectpicker.view.visibleElements,y=[];I.replaceChild(k,I.firstChild);v=0;for(var S=$.length;v<S;v++){var E,C,O=$[v];P.options.sanitize&&(E=O.lastChild)&&(C=P.selectpicker.current.data[v+P.selectpicker.view.position0])&&C.content&&!C.sanitized&&(y.push(E),C.sanitized=!0),x.appendChild(O)}if(P.options.sanitize&&y.length&&B(y,P.options.whiteList,P.options.sanitizeFn),I.firstChild.style.marginBottom=!0===m?(b=0===P.selectpicker.view.position0?0:P.selectpicker.current.data[P.selectpicker.view.position0-1].position,w=P.selectpicker.view.position1>p-1?0:P.selectpicker.current.data[p-1].position-P.selectpicker.current.data[P.selectpicker.view.position1-1].position,I.firstChild.style.marginTop=b+"px",w+"px"):I.firstChild.style.marginTop=0,I.firstChild.appendChild(x),!0===m&&P.sizeInfo.hasScrollBar){var z=I.firstChild.offsetWidth;if(t&&z<P.sizeInfo.menuInnerInnerWidth&&P.sizeInfo.totalMenuWidth>P.sizeInfo.selectWidth)I.firstChild.style.minWidth=P.sizeInfo.menuInnerInnerWidth+"px";else if(z>P.sizeInfo.menuInnerInnerWidth){P.$menu[0].style.minWidth=0;var T=I.firstChild.offsetWidth;T>P.sizeInfo.menuInnerInnerWidth&&(P.sizeInfo.menuInnerInnerWidth=T,I.firstChild.style.minWidth=P.sizeInfo.menuInnerInnerWidth+"px"),P.$menu[0].style.minWidth=""}}}if(P.prevActiveIndex=P.activeIndex,P.options.liveSearch){if(N&&t){var A,L=0;P.selectpicker.view.canHighlight[L]||(L=1+P.selectpicker.view.canHighlight.slice(1).indexOf(!0)),A=P.selectpicker.view.visibleElements[L],P.defocusItem(P.selectpicker.view.currentActive),P.activeIndex=(P.selectpicker.current.data[L]||{}).index,P.focusItem(A)}}else P.$menuInner.trigger("focus")}l(i,!0),this.$menuInner.off("scroll.createView").on("scroll.createView",function(e,t){P.noScroll||l(this.scrollTop,t),P.noScroll=!1}),z(window).off("resize"+j+"."+this.selectId+".createView").on("resize"+j+"."+this.selectId+".createView",function(){P.$newElement.hasClass(V.SHOW)&&l(P.$menuInner[0].scrollTop)})},focusItem:function(e,t,i){if(e){t=t||this.selectpicker.main.data[this.activeIndex];var s=e.firstChild;s&&(s.setAttribute("aria-setsize",this.selectpicker.view.size),s.setAttribute("aria-posinset",t.posinset),!0!==i&&(this.focusedParent.setAttribute("aria-activedescendant",s.id),e.classList.add("active"),s.classList.add("active")))}},defocusItem:function(e){e&&(e.classList.remove("active"),e.firstChild&&e.firstChild.classList.remove("active"))},setPlaceholder:function(){var e=!1;if(this.options.title&&!this.multiple){this.selectpicker.view.titleOption||(this.selectpicker.view.titleOption=document.createElement("option")),e=!0;var t=this.$element[0],i=!1,s=!this.selectpicker.view.titleOption.parentNode;if(s)this.selectpicker.view.titleOption.className="bs-title-option",this.selectpicker.view.titleOption.value="",i=void 0===z(t.options[t.selectedIndex]).attr("selected")&&void 0===this.$element.data("selected");(s||0!==this.selectpicker.view.titleOption.index)&&t.insertBefore(this.selectpicker.view.titleOption,t.firstChild),i&&(t.selectedIndex=0)}return e},createLi:function(){var c=this,f=this.options.iconBase,m=':not([hidden]):not([data-hidden="true"])',v=[],g=[],d=0,b=0,e=this.setPlaceholder()?1:0;this.options.hideDisabled&&(m+=":not(:disabled)"),!c.options.showTick&&!c.multiple||_.checkMark.parentNode||(_.checkMark.className=f+" "+c.options.tickIcon+" check-mark",_.a.appendChild(_.checkMark));var t=this.$element[0].querySelectorAll("select > *"+m);function w(e){var t=g[g.length-1];t&&"divider"===t.type&&(t.optID||e.optID)||((e=e||{}).type="divider",v.push(K(!1,V.DIVIDER,e.optID?e.optID+"div":void 0)),g.push(e))}function I(e,t){if((t=t||{}).divider="true"===e.getAttribute("data-divider"),t.divider)w({optID:t.optID});else{var i=g.length,s=e.style.cssText,n=s?E(s):"",o=(e.className||"")+(t.optgroupClass||"");t.optID&&(o="opt "+o),t.text=e.textContent,t.content=e.getAttribute("data-content"),t.tokens=e.getAttribute("data-tokens"),t.subtext=e.getAttribute("data-subtext"),t.icon=e.getAttribute("data-icon"),t.iconBase=f;var r=Z(t),l=K(Y(r,o,n),"",t.optID);l.firstChild&&(l.firstChild.id=c.selectId+"-"+i),v.push(l),e.liIndex=i,t.display=t.content||t.text,t.type="option",t.index=i,t.option=e,t.disabled=t.disabled||e.disabled,g.push(t);var a=0;t.display&&(a+=t.display.length),t.subtext&&(a+=t.subtext.length),t.icon&&(a+=1),d<a&&(d=a,c.selectpicker.view.widestOption=v[v.length-1])}}function i(e,t){var i=t[e],s=t[e-1],n=t[e+1],o=i.querySelectorAll("option"+m);if(o.length){var r,l,a={label:E(i.label),subtext:i.getAttribute("data-subtext"),icon:i.getAttribute("data-icon"),iconBase:f},c=" "+(i.className||"");b++,s&&w({optID:b});var d=J(a);v.push(K(d,"dropdown-header"+c,b)),g.push({display:a.label,subtext:a.subtext,type:"optgroup-label",optID:b});for(var h=0,p=o.length;h<p;h++){var u=o[h];0===h&&(l=(r=g.length-1)+p),I(u,{headerIndex:r,lastIndex:l,optID:b,optgroupClass:c,disabled:i.disabled})}n&&w({optID:b})}}for(var s=t.length;e<s;e++){var n=t[e];"OPTGROUP"!==n.tagName?I(n,{}):i(e,t)}this.selectpicker.main.elements=v,this.selectpicker.main.data=g,this.selectpicker.current=this.selectpicker.main},findLis:function(){return this.$menuInner.find(".inner > li")},render:function(){this.setPlaceholder();var e,t,i=this,s=this.$element[0],n=O(s,this.options.hideDisabled),o=n.length,r=this.$button[0],l=r.querySelector(".filter-option-inner-inner"),a=document.createTextNode(this.options.multipleSeparator),c=_.fragment.cloneNode(!1),d=!1;if(r.classList.toggle("bs-placeholder",i.multiple?!o:!T(s,n)),this.tabIndex(),"static"===this.options.selectedTextFormat)c=Z({text:this.options.title},!0);else if((e=this.multiple&&-1!==this.options.selectedTextFormat.indexOf("count")&&1<o)&&(e=1<(t=this.options.selectedTextFormat.split(">")).length&&o>t[1]||1===t.length&&2<=o),!1===e){for(var h=0;h<o&&h<50;h++){var p=n[h],u={},f={content:p.getAttribute("data-content"),subtext:p.getAttribute("data-subtext"),icon:p.getAttribute("data-icon")};this.multiple&&0<h&&c.appendChild(a.cloneNode(!1)),p.title?u.text=p.title:f.content&&i.options.showContent?(u.content=f.content.toString(),d=!0):(i.options.showIcon&&(u.icon=f.icon,u.iconBase=this.options.iconBase),i.options.showSubtext&&!i.multiple&&f.subtext&&(u.subtext=" "+f.subtext),u.text=p.textContent.trim()),c.appendChild(Z(u,!0))}49<o&&c.appendChild(document.createTextNode("..."))}else{var m=':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';this.options.hideDisabled&&(m+=":not(:disabled)");var v=this.$element[0].querySelectorAll("select > option"+m+", optgroup"+m+" option"+m).length,g="function"==typeof this.options.countSelectedText?this.options.countSelectedText(o,v):this.options.countSelectedText;c=Z({text:g.replace("{0}",o.toString()).replace("{1}",v.toString())},!0)}if(null==this.options.title&&(this.options.title=this.$element.attr("title")),c.childNodes.length||(c=Z({text:void 0!==this.options.title?this.options.title:this.options.noneSelectedText},!0)),r.title=c.textContent.replace(/<[^>]*>?/g,"").trim(),this.options.sanitize&&d&&B([c],i.options.whiteList,i.options.sanitizeFn),l.innerHTML="",l.appendChild(c),R.major<4&&this.$newElement[0].classList.contains("bs3-has-addon")){var b=r.querySelector(".filter-expand"),w=l.cloneNode(!0);w.className="filter-expand",b?r.replaceChild(w,b):r.appendChild(w)}this.$element.trigger("rendered"+j)},setStyle:function(e,t){var i,s=this.$button[0],n=this.$newElement[0],o=this.options.style.trim();this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,"")),R.major<4&&(n.classList.add("bs3"),n.parentNode.classList.contains("input-group")&&(n.previousElementSibling||n.nextElementSibling)&&(n.previousElementSibling||n.nextElementSibling).classList.contains("input-group-addon")&&n.classList.add("bs3-has-addon")),i=e?e.trim():o,"add"==t?i&&s.classList.add.apply(s.classList,i.split(" ")):"remove"==t?i&&s.classList.remove.apply(s.classList,i.split(" ")):(o&&s.classList.remove.apply(s.classList,o.split(" ")),i&&s.classList.add.apply(s.classList,i.split(" ")))},liHeight:function(e){if(e||!1!==this.options.size&&!this.sizeInfo){this.sizeInfo||(this.sizeInfo={});var t=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),n=document.createElement("ul"),o=document.createElement("li"),r=document.createElement("li"),l=document.createElement("li"),a=document.createElement("a"),c=document.createElement("span"),d=this.options.header&&0<this.$menu.find("."+V.POPOVERHEADER).length?this.$menu.find("."+V.POPOVERHEADER)[0].cloneNode(!0):null,h=this.options.liveSearch?document.createElement("div"):null,p=this.options.actionsBox&&this.multiple&&0<this.$menu.find(".bs-actionsbox").length?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,u=this.options.doneButton&&this.multiple&&0<this.$menu.find(".bs-donebutton").length?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null,f=this.$element.find("option")[0];if(this.sizeInfo.selectWidth=this.$newElement[0].offsetWidth,c.className="text",a.className="dropdown-item "+(f?f.className:""),t.className=this.$menu[0].parentNode.className+" "+V.SHOW,"auto"===this.options.width&&(i.style.minWidth=0),i.className=V.MENU+" "+V.SHOW,s.className="inner "+V.SHOW,n.className=V.MENU+" inner "+("4"===R.major?V.SHOW:""),o.className=V.DIVIDER,r.className="dropdown-header",c.appendChild(document.createTextNode("\u200b")),a.appendChild(c),l.appendChild(a),r.appendChild(c.cloneNode(!0)),this.selectpicker.view.widestOption&&n.appendChild(this.selectpicker.view.widestOption.cloneNode(!0)),n.appendChild(l),n.appendChild(o),n.appendChild(r),d&&i.appendChild(d),h){var m=document.createElement("input");h.className="bs-searchbox",m.className="form-control",h.appendChild(m),i.appendChild(h)}p&&i.appendChild(p),s.appendChild(n),i.appendChild(s),u&&i.appendChild(u),t.appendChild(i),document.body.appendChild(t);var v,g=l.offsetHeight,b=r?r.offsetHeight:0,w=d?d.offsetHeight:0,I=h?h.offsetHeight:0,x=p?p.offsetHeight:0,k=u?u.offsetHeight:0,$=z(o).outerHeight(!0),y=!!window.getComputedStyle&&window.getComputedStyle(i),S=i.offsetWidth,E=y?null:z(i),C={vert:L(y?y.paddingTop:E.css("paddingTop"))+L(y?y.paddingBottom:E.css("paddingBottom"))+L(y?y.borderTopWidth:E.css("borderTopWidth"))+L(y?y.borderBottomWidth:E.css("borderBottomWidth")),horiz:L(y?y.paddingLeft:E.css("paddingLeft"))+L(y?y.paddingRight:E.css("paddingRight"))+L(y?y.borderLeftWidth:E.css("borderLeftWidth"))+L(y?y.borderRightWidth:E.css("borderRightWidth"))},O={vert:C.vert+L(y?y.marginTop:E.css("marginTop"))+L(y?y.marginBottom:E.css("marginBottom"))+2,horiz:C.horiz+L(y?y.marginLeft:E.css("marginLeft"))+L(y?y.marginRight:E.css("marginRight"))+2};s.style.overflowY="scroll",v=i.offsetWidth-S,document.body.removeChild(t),this.sizeInfo.liHeight=g,this.sizeInfo.dropdownHeaderHeight=b,this.sizeInfo.headerHeight=w,this.sizeInfo.searchHeight=I,this.sizeInfo.actionsHeight=x,this.sizeInfo.doneButtonHeight=k,this.sizeInfo.dividerHeight=$,this.sizeInfo.menuPadding=C,this.sizeInfo.menuExtras=O,this.sizeInfo.menuWidth=S,this.sizeInfo.menuInnerInnerWidth=S-C.horiz,this.sizeInfo.totalMenuWidth=this.sizeInfo.menuWidth,this.sizeInfo.scrollBarWidth=v,this.sizeInfo.selectHeight=this.$newElement[0].offsetHeight,this.setPositionData()}},getSelectPosition:function(){var e,t=z(window),i=this.$newElement.offset(),s=z(this.options.container);this.options.container&&s.length&&!s.is("body")?((e=s.offset()).top+=parseInt(s.css("borderTopWidth")),e.left+=parseInt(s.css("borderLeftWidth"))):e={top:0,left:0};var n=this.options.windowPadding;this.sizeInfo.selectOffsetTop=i.top-e.top-t.scrollTop(),this.sizeInfo.selectOffsetBot=t.height()-this.sizeInfo.selectOffsetTop-this.sizeInfo.selectHeight-e.top-n[2],this.sizeInfo.selectOffsetLeft=i.left-e.left-t.scrollLeft(),this.sizeInfo.selectOffsetRight=t.width()-this.sizeInfo.selectOffsetLeft-this.sizeInfo.selectWidth-e.left-n[1],this.sizeInfo.selectOffsetTop-=n[0],this.sizeInfo.selectOffsetLeft-=n[3]},setMenuSize:function(e){this.getSelectPosition();var t,i,s,n,o,r,l,a=this.sizeInfo.selectWidth,c=this.sizeInfo.liHeight,d=this.sizeInfo.headerHeight,h=this.sizeInfo.searchHeight,p=this.sizeInfo.actionsHeight,u=this.sizeInfo.doneButtonHeight,f=this.sizeInfo.dividerHeight,m=this.sizeInfo.menuPadding,v=0;if(this.options.dropupAuto&&(l=c*this.selectpicker.current.elements.length+m.vert,this.$newElement.toggleClass(V.DROPUP,this.sizeInfo.selectOffsetTop-this.sizeInfo.selectOffsetBot>this.sizeInfo.menuExtras.vert&&l+this.sizeInfo.menuExtras.vert+50>this.sizeInfo.selectOffsetBot)),"auto"===this.options.size)n=3<this.selectpicker.current.elements.length?3*this.sizeInfo.liHeight+this.sizeInfo.menuExtras.vert-2:0,i=this.sizeInfo.selectOffsetBot-this.sizeInfo.menuExtras.vert,s=n+d+h+p+u,r=Math.max(n-m.vert,0),this.$newElement.hasClass(V.DROPUP)&&(i=this.sizeInfo.selectOffsetTop-this.sizeInfo.menuExtras.vert),t=(o=i)-d-h-p-u-m.vert;else if(this.options.size&&"auto"!=this.options.size&&this.selectpicker.current.elements.length>this.options.size){for(var g=0;g<this.options.size;g++)"divider"===this.selectpicker.current.data[g].type&&v++;t=(i=c*this.options.size+v*f+m.vert)-m.vert,o=i+d+h+p+u,s=r=""}this.$menu.css({"max-height":o+"px",overflow:"hidden","min-height":s+"px"}),this.$menuInner.css({"max-height":t+"px","overflow-y":"auto","min-height":r+"px"}),this.sizeInfo.menuInnerHeight=Math.max(t,1),this.selectpicker.current.data.length&&this.selectpicker.current.data[this.selectpicker.current.data.length-1].position>this.sizeInfo.menuInnerHeight&&(this.sizeInfo.hasScrollBar=!0,this.sizeInfo.totalMenuWidth=this.sizeInfo.menuWidth+this.sizeInfo.scrollBarWidth),"auto"===this.options.dropdownAlignRight&&this.$menu.toggleClass(V.MENURIGHT,this.sizeInfo.selectOffsetLeft>this.sizeInfo.selectOffsetRight&&this.sizeInfo.selectOffsetRight<this.sizeInfo.totalMenuWidth-a),this.dropdown&&this.dropdown._popper&&this.dropdown._popper.update()},setSize:function(e){if(this.liHeight(e),this.options.header&&this.$menu.css("padding-top",0),!1!==this.options.size){var t=this,i=z(window);this.setMenuSize(),this.options.liveSearch&&this.$searchbox.off("input.setMenuSize propertychange.setMenuSize").on("input.setMenuSize propertychange.setMenuSize",function(){return t.setMenuSize()}),"auto"===this.options.size?i.off("resize"+j+"."+this.selectId+".setMenuSize scroll"+j+"."+this.selectId+".setMenuSize").on("resize"+j+"."+this.selectId+".setMenuSize scroll"+j+"."+this.selectId+".setMenuSize",function(){return t.setMenuSize()}):this.options.size&&"auto"!=this.options.size&&this.selectpicker.current.elements.length>this.options.size&&i.off("resize"+j+"."+this.selectId+".setMenuSize scroll"+j+"."+this.selectId+".setMenuSize"),t.createView(!1,!0,e)}},setWidth:function(){var i=this;"auto"===this.options.width?requestAnimationFrame(function(){i.$menu.css("min-width","0"),i.$element.on("loaded"+j,function(){i.liHeight(),i.setMenuSize();var e=i.$newElement.clone().appendTo("body"),t=e.css("width","auto").children("button").outerWidth();e.remove(),i.sizeInfo.selectWidth=Math.max(i.sizeInfo.totalMenuWidth,t),i.$newElement.css("width",i.sizeInfo.selectWidth+"px")})}):"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width","")),this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement[0].classList.remove("fit-width")},selectPosition:function(){this.$bsContainer=z('<div class="bs-container" />');var s,n,o,r=this,l=z(this.options.container),e=function(e){var t={},i=r.options.display||!!z.fn.dropdown.Constructor.Default&&z.fn.dropdown.Constructor.Default.display;r.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass(V.DROPUP,e.hasClass(V.DROPUP)),s=e.offset(),l.is("body")?n={top:0,left:0}:((n=l.offset()).top+=parseInt(l.css("borderTopWidth"))-l.scrollTop(),n.left+=parseInt(l.css("borderLeftWidth"))-l.scrollLeft()),o=e.hasClass(V.DROPUP)?0:e[0].offsetHeight,(R.major<4||"static"===i)&&(t.top=s.top-n.top+o,t.left=s.left-n.left),t.width=e[0].offsetWidth,r.$bsContainer.css(t)};this.$button.on("click.bs.dropdown.data-api",function(){r.isDisabled()||(e(r.$newElement),r.$bsContainer.appendTo(r.options.container).toggleClass(V.SHOW,!r.$button.hasClass(V.SHOW)).append(r.$menu))}),z(window).off("resize"+j+"."+this.selectId+" scroll"+j+"."+this.selectId).on("resize"+j+"."+this.selectId+" scroll"+j+"."+this.selectId,function(){r.$newElement.hasClass(V.SHOW)&&e(r.$newElement)}),this.$element.on("hide"+j,function(){r.$menu.data("height",r.$menu.height()),r.$bsContainer.detach()})},setOptionStatus:function(e){var t=this;if(t.noScroll=!1,t.selectpicker.view.visibleElements&&t.selectpicker.view.visibleElements.length)for(var i=0;i<t.selectpicker.view.visibleElements.length;i++){var s=t.selectpicker.current.data[i+t.selectpicker.view.position0],n=s.option;n&&(!0!==e&&t.setDisabled(s.index,s.disabled),t.setSelected(s.index,n.selected))}},setSelected:function(e,t){var i,s,n=this.selectpicker.main.elements[e],o=this.selectpicker.main.data[e],r=void 0!==this.activeIndex,l=this.activeIndex===e||t&&!this.multiple&&!r;o.selected=t,s=n.firstChild,t&&(this.selectedIndex=e),n.classList.toggle("selected",t),l?(this.focusItem(n,o),this.selectpicker.view.currentActive=n,this.activeIndex=e):this.defocusItem(n),s&&(s.classList.toggle("selected",t),t?s.setAttribute("aria-selected",!0):this.multiple?s.setAttribute("aria-selected",!1):s.removeAttribute("aria-selected")),l||r||!t||void 0===this.prevActiveIndex||(i=this.selectpicker.main.elements[this.prevActiveIndex],this.defocusItem(i))},setDisabled:function(e,t){var i,s=this.selectpicker.main.elements[e];this.selectpicker.main.data[e].disabled=t,i=s.firstChild,s.classList.toggle(V.DISABLED,t),i&&("4"===R.major&&i.classList.toggle(V.DISABLED,t),t?(i.setAttribute("aria-disabled",t),i.setAttribute("tabindex",-1)):(i.removeAttribute("aria-disabled"),i.setAttribute("tabindex",0)))},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){var e=this;this.isDisabled()?(this.$newElement[0].classList.add(V.DISABLED),this.$button.addClass(V.DISABLED).attr("tabindex",-1).attr("aria-disabled",!0)):(this.$button[0].classList.contains(V.DISABLED)&&(this.$newElement[0].classList.remove(V.DISABLED),this.$button.removeClass(V.DISABLED).attr("aria-disabled",!1)),-1!=this.$button.attr("tabindex")||this.$element.data("tabindex")||this.$button.removeAttr("tabindex")),this.$button.on("click",function(){return!e.isDisabled()})},tabIndex:function(){this.$element.data("tabindex")!==this.$element.attr("tabindex")&&-98!==this.$element.attr("tabindex")&&"-98"!==this.$element.attr("tabindex")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex"))),this.$element.attr("tabindex",-98)},clickListener:function(){var C=this,t=z(document);function e(){C.options.liveSearch?C.$searchbox.trigger("focus"):C.$menuInner.trigger("focus")}function i(){C.dropdown&&C.dropdown._popper&&C.dropdown._popper.state.isCreated?e():requestAnimationFrame(i)}t.data("spaceSelect",!1),this.$button.on("keyup",function(e){/(32)/.test(e.keyCode.toString(10))&&t.data("spaceSelect")&&(e.preventDefault(),t.data("spaceSelect",!1))}),this.$newElement.on("show.bs.dropdown",function(){3<R.major&&!C.dropdown&&(C.dropdown=C.$button.data("bs.dropdown"),C.dropdown._menu=C.$menu[0])}),this.$button.on("click.bs.dropdown.data-api",function(){C.$newElement.hasClass(V.SHOW)||C.setSize()}),this.$element.on("shown"+j,function(){C.$menuInner[0].scrollTop!==C.selectpicker.view.scrollTop&&(C.$menuInner[0].scrollTop=C.selectpicker.view.scrollTop),3<R.major?requestAnimationFrame(i):e()}),this.$menuInner.on("mouseenter","li a",function(e){var t=this.parentElement,i=C.isVirtual()?C.selectpicker.view.position0:0,s=Array.prototype.indexOf.call(t.parentElement.children,t),n=C.selectpicker.current.data[s+i];C.focusItem(t,n,!0)}),this.$menuInner.on("click","li a",function(e,t){var i=z(this),s=C.$element[0],n=C.isVirtual()?C.selectpicker.view.position0:0,o=C.selectpicker.current.data[i.parent().index()+n],r=o.index,l=T(s),a=s.selectedIndex,c=s.options[a],d=!0;if(C.multiple&&1!==C.options.maxOptions&&e.stopPropagation(),e.preventDefault(),!C.isDisabled()&&!i.parent().hasClass(V.DISABLED)){var h=o.option,p=z(h),u=h.selected,f=p.parent("optgroup"),m=f.find("option"),v=C.options.maxOptions,g=f.data("maxOptions")||!1;if(r===C.activeIndex&&(t=!0),t||(C.prevActiveIndex=C.activeIndex,C.activeIndex=void 0),C.multiple){if(h.selected=!u,C.setSelected(r,!u),i.trigger("blur"),!1!==v||!1!==g){var b=v<O(s).length,w=g<f.find("option:selected").length;if(v&&b||g&&w)if(v&&1==v)s.selectedIndex=-1,h.selected=!0,C.setOptionStatus(!0);else if(g&&1==g){for(var I=0;I<m.length;I++){var x=m[I];x.selected=!1,C.setSelected(x.liIndex,!1)}h.selected=!0,C.setSelected(r,!0)}else{var k="string"==typeof C.options.maxOptionsText?[C.options.maxOptionsText,C.options.maxOptionsText]:C.options.maxOptionsText,$="function"==typeof k?k(v,g):k,y=$[0].replace("{n}",v),S=$[1].replace("{n}",g),E=z('<div class="notify"></div>');$[2]&&(y=y.replace("{var}",$[2][1<v?0:1]),S=S.replace("{var}",$[2][1<g?0:1])),h.selected=!1,C.$menu.append(E),v&&b&&(E.append(z("<div>"+y+"</div>")),d=!1,C.$element.trigger("maxReached"+j)),g&&w&&(E.append(z("<div>"+S+"</div>")),d=!1,C.$element.trigger("maxReachedGrp"+j)),setTimeout(function(){C.setSelected(r,!1)},10),E[0].classList.add("fadeOut"),setTimeout(function(){E.remove()},1050)}}}else c&&(c.selected=!1),h.selected=!0,C.setSelected(r,!0);!C.multiple||C.multiple&&1===C.options.maxOptions?C.$button.trigger("focus"):C.options.liveSearch&&C.$searchbox.trigger("focus"),d&&(C.multiple||a!==s.selectedIndex)&&(A=[h.index,p.prop("selected"),l],C.$element.triggerNative("change"))}}),this.$menu.on("click","li."+V.DISABLED+" a, ."+V.POPOVERHEADER+", ."+V.POPOVERHEADER+" :not(.close)",function(e){e.currentTarget==this&&(e.preventDefault(),e.stopPropagation(),C.options.liveSearch&&!z(e.target).hasClass("close")?C.$searchbox.trigger("focus"):C.$button.trigger("focus"))}),this.$menuInner.on("click",".divider, .dropdown-header",function(e){e.preventDefault(),e.stopPropagation(),C.options.liveSearch?C.$searchbox.trigger("focus"):C.$button.trigger("focus")}),this.$menu.on("click","."+V.POPOVERHEADER+" .close",function(){C.$button.trigger("click")}),this.$searchbox.on("click",function(e){e.stopPropagation()}),this.$menu.on("click",".actions-btn",function(e){C.options.liveSearch?C.$searchbox.trigger("focus"):C.$button.trigger("focus"),e.preventDefault(),e.stopPropagation(),z(this).hasClass("bs-select-all")?C.selectAll():C.deselectAll()}),this.$element.on("change"+j,function(){C.render(),C.$element.trigger("changed"+j,A),A=null}).on("focus"+j,function(){C.options.mobile||C.$button.trigger("focus")})},liveSearchListener:function(){var u=this,f=document.createElement("li");this.$button.on("click.bs.dropdown.data-api",function(){u.$searchbox.val()&&u.$searchbox.val("")}),this.$searchbox.on("click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api",function(e){e.stopPropagation()}),this.$searchbox.on("input propertychange",function(){var e=u.$searchbox.val();if(u.selectpicker.search.elements=[],u.selectpicker.search.data=[],e){var t=[],i=e.toUpperCase(),s={},n=[],o=u._searchStyle(),r=u.options.liveSearchNormalize;r&&(i=w(i)),u._$lisSelected=u.$menuInner.find(".selected");for(var l=0;l<u.selectpicker.main.data.length;l++){var a=u.selectpicker.main.data[l];s[l]||(s[l]=k(a,i,o,r)),s[l]&&void 0!==a.headerIndex&&-1===n.indexOf(a.headerIndex)&&(0<a.headerIndex&&(s[a.headerIndex-1]=!0,n.push(a.headerIndex-1)),s[a.headerIndex]=!0,n.push(a.headerIndex),s[a.lastIndex+1]=!0),s[l]&&"optgroup-label"!==a.type&&n.push(l)}l=0;for(var c=n.length;l<c;l++){var d=n[l],h=n[l-1],p=(a=u.selectpicker.main.data[d],u.selectpicker.main.data[h]);("divider"!==a.type||"divider"===a.type&&p&&"divider"!==p.type&&c-1!==l)&&(u.selectpicker.search.data.push(a),t.push(u.selectpicker.main.elements[d]))}u.activeIndex=void 0,u.noScroll=!0,u.$menuInner.scrollTop(0),u.selectpicker.search.elements=t,u.createView(!0),t.length||(f.className="no-results",f.innerHTML=u.options.noneResultsText.replace("{0}",'"'+E(e)+'"'),u.$menuInner[0].firstChild.appendChild(f))}else u.$menuInner.scrollTop(0),u.createView(!1)})},_searchStyle:function(){return this.options.liveSearchStyle||"contains"},val:function(e){var t=this.$element[0];if(void 0===e)return this.$element.val();var i=T(t);if(A=[null,null,i],this.$element.val(e).trigger("changed"+j,A),this.$newElement.hasClass(V.SHOW))if(this.multiple)this.setOptionStatus(!0);else{var s=(t.options[t.selectedIndex]||{}).liIndex;"number"==typeof s&&(this.setSelected(this.selectedIndex,!1),this.setSelected(s,!0))}return this.render(),A=null,this.$element},changeAll:function(e){if(this.multiple){void 0===e&&(e=!0);var t=this.$element[0],i=0,s=0,n=T(t);t.classList.add("bs-select-hidden");for(var o=0,r=this.selectpicker.current.elements.length;o<r;o++){var l=this.selectpicker.current.data[o],a=l.option;a&&!l.disabled&&"divider"!==l.type&&(l.selected&&i++,(a.selected=e)&&s++)}t.classList.remove("bs-select-hidden"),i!==s&&(this.setOptionStatus(),A=[null,null,n],this.$element.triggerNative("change"))}},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(e){(e=e||window.event)&&e.stopPropagation(),this.$button.trigger("click.bs.dropdown.data-api")},keydown:function(e){var t,i,s,n,o,r=z(this),l=r.hasClass("dropdown-toggle"),a=(l?r.closest(".dropdown"):r.closest(F.MENU)).data("this"),c=a.findLis(),d=!1,h=e.which===P&&!l&&!a.options.selectOnTab,p=G.test(e.which)||h,u=a.$menuInner[0].scrollTop,f=!0===a.isVirtual()?a.selectpicker.view.position0:0;if(!(i=a.$newElement.hasClass(V.SHOW))&&(p||48<=e.which&&e.which<=57||96<=e.which&&e.which<=105||65<=e.which&&e.which<=90)&&(a.$button.trigger("click.bs.dropdown.data-api"),a.options.liveSearch))a.$searchbox.trigger("focus");else{if(e.which===N&&i&&(e.preventDefault(),a.$button.trigger("click.bs.dropdown.data-api").trigger("focus")),p){if(!c.length)return;-1!==(t=(s=a.selectpicker.main.elements[a.activeIndex])?Array.prototype.indexOf.call(s.parentElement.children,s):-1)&&a.defocusItem(s),e.which===W?(-1!==t&&t--,t+f<0&&(t+=c.length),a.selectpicker.view.canHighlight[t+f]||-1===(t=a.selectpicker.view.canHighlight.slice(0,t+f).lastIndexOf(!0)-f)&&(t=c.length-1)):(e.which===M||h)&&(++t+f>=a.selectpicker.view.canHighlight.length&&(t=0),a.selectpicker.view.canHighlight[t+f]||(t=t+1+a.selectpicker.view.canHighlight.slice(t+f+1).indexOf(!0))),e.preventDefault();var m=f+t;e.which===W?0===f&&t===c.length-1?(a.$menuInner[0].scrollTop=a.$menuInner[0].scrollHeight,m=a.selectpicker.current.elements.length-1):d=(o=(n=a.selectpicker.current.data[m]).position-n.height)<u:(e.which===M||h)&&(0===t?m=a.$menuInner[0].scrollTop=0:d=u<(o=(n=a.selectpicker.current.data[m]).position-a.sizeInfo.menuInnerHeight)),s=a.selectpicker.current.elements[m],a.activeIndex=a.selectpicker.current.data[m].index,a.focusItem(s),a.selectpicker.view.currentActive=s,d&&(a.$menuInner[0].scrollTop=o),a.options.liveSearch?a.$searchbox.trigger("focus"):r.trigger("focus")}else if(!r.is("input")&&!q.test(e.which)||e.which===H&&a.selectpicker.keydown.keyHistory){var v,g,b=[];e.preventDefault(),a.selectpicker.keydown.keyHistory+=C[e.which],a.selectpicker.keydown.resetKeyHistory.cancel&&clearTimeout(a.selectpicker.keydown.resetKeyHistory.cancel),a.selectpicker.keydown.resetKeyHistory.cancel=a.selectpicker.keydown.resetKeyHistory.start(),g=a.selectpicker.keydown.keyHistory,/^(.)\1+$/.test(g)&&(g=g.charAt(0));for(var w=0;w<a.selectpicker.current.data.length;w++){var I=a.selectpicker.current.data[w];k(I,g,"startsWith",!0)&&a.selectpicker.view.canHighlight[w]&&b.push(I.index)}if(b.length){var x=0;c.removeClass("active").find("a").removeClass("active"),1===g.length&&(-1===(x=b.indexOf(a.activeIndex))||x===b.length-1?x=0:x++),v=b[x],d=0<u-(n=a.selectpicker.main.data[v]).position?(o=n.position-n.height,!0):(o=n.position-a.sizeInfo.menuInnerHeight,n.position>u+a.sizeInfo.menuInnerHeight),s=a.selectpicker.main.elements[v],a.activeIndex=b[x],a.focusItem(s),s&&s.firstChild.focus(),d&&(a.$menuInner[0].scrollTop=o),r.trigger("focus")}}i&&(e.which===H&&!a.selectpicker.keydown.keyHistory||e.which===D||e.which===P&&a.options.selectOnTab)&&(e.which!==H&&e.preventDefault(),a.options.liveSearch&&e.which===H||(a.$menuInner.find(".active a").trigger("click",!0),r.trigger("focus"),a.options.liveSearch||(e.preventDefault(),z(document).data("spaceSelect",!0))))}},mobile:function(){this.$element[0].classList.add("mobile-device")},refresh:function(){var e=z.extend({},this.options,this.$element.data());this.options=e,this.checkDisabled(),this.setStyle(),this.render(),this.createLi(),this.setWidth(),this.setSize(!0),this.$element.trigger("refreshed"+j)},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.$element.off(j).removeData("selectpicker").removeClass("bs-select-hidden selectpicker"),z(window).off(j+"."+this.selectId)}};var ee=z.fn.selectpicker;z.fn.selectpicker=X,z.fn.selectpicker.Constructor=Q,z.fn.selectpicker.noConflict=function(){return z.fn.selectpicker=ee,this},z(document).off("keydown.bs.dropdown.data-api").on("keydown"+j,'.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',Q.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input',function(e){e.stopPropagation()}),z(window).on("load"+j+".data-api",function(){z(".selectpicker").each(function(){var e=z(this);X.call(e,e.data())})})}(e)});
//# sourceMappingURL=bootstrap-select.min.js.map
/*
    The MIT License (MIT)

    Copyright (c) 2014 Dirk Groenen

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
*/

(function($){
    $.fn.viewportChecker = function(useroptions){
        // Define options and extend with user
        var options = {
            classToAdd: 'visible',
            classToRemove : 'invisible',
            classToAddForFullView : 'full-visible',
            removeClassAfterAnimation: false,
            offset: 100,
            repeat: false,
            invertBottomOffset: true,
            callbackFunction: function(elem, action){},
            scrollHorizontal: false,
            scrollBox: window
        };
        $.extend(options, useroptions);

        // Cache the given element and height of the browser
        var $elem = this,
            boxSize = {height: $(options.scrollBox).height(), width: $(options.scrollBox).width()};

        /*
         * Main method that checks the elements and adds or removes the class(es)
         */
        this.checkElements = function(){
            var viewportStart, viewportEnd;

            // Set some vars to check with
            if (!options.scrollHorizontal){
                viewportStart = Math.max(
                    $('html').scrollTop(),
                    $('body').scrollTop(),
                    $(window).scrollTop()
                );
                viewportEnd = (viewportStart + boxSize.height);
            }
            else{
                viewportStart = Math.max(
                    $('html').scrollLeft(),
                    $('body').scrollLeft(),
                    $(window).scrollLeft()
                );
                viewportEnd = (viewportStart + boxSize.width);
            }

            // Loop through all given dom elements
            $elem.each(function(){
                var $obj = $(this),
                    objOptions = {},
                    attrOptions = {};

                //  Get any individual attribution data
                if ($obj.data('vp-add-class'))
                    attrOptions.classToAdd = $obj.data('vp-add-class');
                if ($obj.data('vp-remove-class'))
                    attrOptions.classToRemove = $obj.data('vp-remove-class');
                if ($obj.data('vp-add-class-full-view'))
                    attrOptions.classToAddForFullView = $obj.data('vp-add-class-full-view');
                if ($obj.data('vp-keep-add-class'))
                    attrOptions.removeClassAfterAnimation = $obj.data('vp-remove-after-animation');
                if ($obj.data('vp-offset'))
                    attrOptions.offset = $obj.data('vp-offset');
                if ($obj.data('vp-repeat'))
                    attrOptions.repeat = $obj.data('vp-repeat');
                if ($obj.data('vp-scrollHorizontal'))
                    attrOptions.scrollHorizontal = $obj.data('vp-scrollHorizontal');
                if ($obj.data('vp-invertBottomOffset'))
                    attrOptions.scrollHorizontal = $obj.data('vp-invertBottomOffset');

                // Extend objOptions with data attributes and default options
                $.extend(objOptions, options);
                $.extend(objOptions, attrOptions);

                // If class already exists; quit
                if ($obj.data('vp-animated') && !objOptions.repeat){
                    return;
                }

                // Check if the offset is percentage based
                if (String(objOptions.offset).indexOf("%") > 0)
                    objOptions.offset = (parseInt(objOptions.offset) / 100) * boxSize.height;

                // Get the raw start and end positions
                var rawStart = (!objOptions.scrollHorizontal) ? $obj.offset().top : $obj.offset().left,
                    rawEnd = (!objOptions.scrollHorizontal) ? rawStart + $obj.height() : rawStart + $obj.width();

                // Add the defined offset
                var elemStart = Math.round( rawStart ) + objOptions.offset,
                    elemEnd = (!objOptions.scrollHorizontal) ? elemStart + $obj.height() : elemStart + $obj.width();

                if (objOptions.invertBottomOffset)
                    elemEnd -= (objOptions.offset * 2);

                // Add class if in viewport
                if ((elemStart < viewportEnd) && (elemEnd > viewportStart)){

                    // Remove class
                    $obj.removeClass(objOptions.classToRemove);
                    $obj.addClass(objOptions.classToAdd);

                    // Do the callback function. Callback wil send the jQuery object as parameter
                    objOptions.callbackFunction($obj, "add");

                    // Check if full element is in view
                    if (rawEnd <= viewportEnd && rawStart >= viewportStart)
                        $obj.addClass(objOptions.classToAddForFullView);
                    else
                        $obj.removeClass(objOptions.classToAddForFullView);

                    // Set element as already animated
                    $obj.data('vp-animated', true);

                    if (objOptions.removeClassAfterAnimation) {
                        $obj.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                            $obj.removeClass(objOptions.classToAdd);
                        });
                    }

                // Remove class if not in viewport and repeat is true
                } else if ($obj.hasClass(objOptions.classToAdd) && (objOptions.repeat)){
                    $obj.removeClass(objOptions.classToAdd + " " + objOptions.classToAddForFullView);

                    // Do the callback function.
                    objOptions.callbackFunction($obj, "remove");

                    // Remove already-animated-flag
                    $obj.data('vp-animated', false);
                }
            });

        };

        /**
         * Binding the correct event listener is still a tricky thing.
         * People have expierenced sloppy scrolling when both scroll and touch
         * events are added, but to make sure devices with both scroll and touch
         * are handles too we always have to add the window.scroll event
         *
         * @see  https://github.com/dirkgroenen/jQuery-viewport-checker/issues/25
         * @see  https://github.com/dirkgroenen/jQuery-viewport-checker/issues/27
         */

        // Select the correct events
        if( 'ontouchstart' in window || 'onmsgesturechange' in window ){
            // Device with touchscreen
            $(document).bind("touchmove MSPointerMove pointermove", this.checkElements);
        }

        // Always load on window load
        $(options.scrollBox).bind("load scroll", this.checkElements);

        // On resize change the height var
        $(window).resize(function(e){
            boxSize = {height: $(options.scrollBox).height(), width: $(options.scrollBox).width()};
            $elem.checkElements();
        });

        // trigger inital check if elements already visible
        this.checkElements();

        // Default jquery plugin behaviour
        return this;
    };
})(jQuery);
