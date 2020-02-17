/*

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.
Given the root to a binary tree, count the number of unival subtrees.
For example, the following tree has 5 unival subtrees:
   0
  / \
 1   0
    / \
   1   0
  / \
 1   1

 */

const tree = {
    v: 0,
    a: {
        v: 1
    },
    b: {
        v: 0,
        b: {
            v: 0
        },
        a: {
            v: 1,
            a: {
                v: 1
            },
            b: {
                v: 1
            }
        }
    }
}

const tree2 = {
    v: 1,
    a: {
        v: 0
    },
    b: {
        v: 0,
        a: {
            v: 1
        },
        b: {
            v: 0
        }
    }
}


function countTree(tree) {
    if (tree.a) {
        const vA = countTree(tree.a)
        const vB = countTree(tree.b)
        count = vA + vB;
        if (tree.v == tree.a.v && tree.v == tree.b.v && tree.a.isOk && tree.b.isOk) {
            tree.isOk = true;
            count++;
        }
        return count;
    }
    tree.isOk = true;
    return 1;
}

console.log(countTree(tree));