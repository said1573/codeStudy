package codingTest;

import java.util.ArrayList;
import java.util.Arrays;

public class C기능개발 {
    public static void main(String[] args) {

        int[] progresses = new int[]{93, 30, 55};
        int[] speeds = new int[]{1, 30, 5};

        C기능개발 coding = new C기능개발();
        coding.solution(progresses, speeds);
    }

    public ArrayList<Integer> solution(int[] progresses, int[] speeds) {

        ArrayList<Integer> arrayList = new ArrayList<>();

        return dailyCount(arrayList, progresses, speeds);
    }

    public static ArrayList<Integer> dailyCount(ArrayList<Integer> arrayList, int[] progresses, int[] speeds) {

        // 첫번째 값이 100이상이 될 때까지
        while(true) {
            if(progresses[0] >= 100) {
                break;
            }

            for(int i = 0; i < progresses.length; i++) {
                progresses[i] = progresses[i] + speeds[i];
            }
        }

        System.out.println(Arrays.toString(progresses));
        // 첫 번째부터 시작하여 100이상인 인덱스 파악
        int startIndex = 0;
        int count = 0;
        int check = 0;
        for(int j = 0; j < progresses.length; j++) {
            if(progresses[j] >= 100) {
                check += 1;
                continue;
            } else {
                startIndex = j;
                count      = j;
                arrayList.add(count);
                break;
            }
        }

        // progresses 요소가 전부다 100이 넘어서 for문을 통과했을 떄
        if(check == progresses.length) {
            startIndex = check;
            arrayList.add(check);
        }
        System.out.println("startIndex : " + startIndex);
        System.out.println("count : " + count);
        System.out.println("arrayList : " + arrayList);
        // 새로운 progresses 배열 생성
        int[] new_progresses = new int[progresses.length - (startIndex)];
        int[] new_speeds     = new int[speeds.length - (startIndex)];

        for(int z = 0; z < progresses.length - (startIndex); z++) {
            new_progresses[z] = progresses[startIndex + z];
        }

        for(int k = 0; k < speeds.length - (startIndex); k++) {
            new_speeds[k] = speeds[startIndex + k];
        }
        System.out.println("new_progresses : " + Arrays.toString(new_progresses));
        System.out.println("new_speeds : " + Arrays.toString(new_speeds));

        // 더이상 작업이 없으면 arrayList return
        if(new_progresses.length <= 0) {
            System.out.println("end");
            System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>" + arrayList);
             return arrayList;
        } else {
            dailyCount(arrayList, new_progresses, new_speeds);
        }

        return arrayList;
    }
}
