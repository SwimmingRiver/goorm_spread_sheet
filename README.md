## Spread Sheet
---
- 처음엔 div와 배열로 테이블을 만들었다가 엑셀 형식 저장을 위해 table 태그로 수정했다.

- ~~테이블을 만들어서 저장하려면 아래의 코드가 필요하다.~~


- Excel 형태로 저장
`````` js

<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.9/xlsx.full.min.js"></script>

`````` 
- 저장 설정
``````js
<script src="https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js"></script>
``````

 **해설 강의를 듣고난 후**

  *  처음에 만들었던 대로 배열과 반복문을 해서 테이블을 만들어도 가능했다.
      - 열단위로 나누어서 첫번째는 첫칸을 비우고 알파벳만 그 다음부터는 첫칸에 숫자 값을 넣어서 반복문을 실행한다.
  *  셀을 클래스로 만들어 필요한 값을 지정한다. 
     - _클래스를 잘  안써서 객체 정도까지 밖에 생각못했다.._
    
   ```js
    class Cell{
    constructor(isHeader, disabled, data, row, column, rowName, columnName, active = false) {
        this.isHeader = isHeader;
        this.disabled = disabled;//isHeader로 첫 칸 여부확인후 입력이 불가능하게 한다.
        this.data = data;
        this.row = row;
        this.column = column;
        this.rowName = rowName;
        this.columnName = columnName;
        this.active = active;
        }
    }
```
*  Blob을 이용하여 csv로 저장하기

    - 입력 받은 값을 그대로 저장하여 넘기면 입력을 받지않는 첫 행과열의 값도 같이 전달되어 여백이 생기는 점을 주의해야한다.

    ```js
    for (let i = 0; i < spreadsheet.length; i++) {
        if (i === 0) continue; //0일땐 건너뛰기
        csv +=
            spreadsheet[i]
                .filter(item => !item.isHeader)
                .map(item => item.data)
                .join(',') + "\r\n";
    }

    ```
