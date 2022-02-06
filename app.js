// const person : {
//   name : string; //ts의 표현일 뿐 js로 컴파일되진 않음
//   age : number;
// }=
// const person:{
//   name : string;
//   age : number;
//   hobbies: string[];
//   role: [number, string]; //tuple타입으로 선언하는 것
//   //위와 같은 tuple로 선언되면 2개의 원소만 가지고 첫째는 숫자, 둘째는 string으로 하겠다고 고정시키는 것
// } =
// {
//   name : 'Maximilian',
//   age : 30,
//   hobbies : ['Sports','Cooking'],
//   role : [2,'author']
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; //숫자 순으로 0,1,2, 들어감
var person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    // role : ADMIN //enum 외의 형식으로 쓰는 것
    role: Role.ADMIN //enum 방식 사용
};
// person.role.push('admin'); //push는 tuple에 대해서도 예외이므로 ts가 오류를 발생시키진 않음
// person.role[1] = 10; //1번 index가 string이어야 하므로 에러
// person.role = [0,'admin','user']; //2개만 받기로 했으므로 오류메시지
console.log(person.role);
var favoriteActivities;
// favoriteActivities = 'Sports'; // single string이므로 에러 남
favoriteActivities = ['Sports']; //에러 안 남
// favoriteActivities = ['Sports',1]; //mixed array이므로 에러
//이를 가능하게 하려면 favoriteActivities : any[] 로 선언 필요
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); //!!! ERROR !!! map은 array들에 적용 가능. string에는 안됨
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
