
nameof

```tsx
// <https://www.meziantou.net/typescript-nameof-operator-equivalent.htm>
// <https://schneidenbach.gitbooks.io/typescript-cookbook/content/nameof-operator.html>

type User = {
    id: string;
    name: string;
};

function nameof<T>(key: keyof T): keyof T {
    return key;
}

console.log(nameof<User>("name"));
console.log(nameof<User>("id"));
```