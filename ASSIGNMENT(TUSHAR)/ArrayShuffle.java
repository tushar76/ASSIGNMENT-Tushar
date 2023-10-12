import java.util.Random;

public class ArrayShuffle {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(arr);
        for (int val : arr) {
            System.out.print(val + " ");
        }
    }
    public static void shuffleArray(int[] arr) {
        int n = arr.length;
        Random random = new Random();
        for (int i = 0; i < n; i++) {
            int Index = random.nextInt(n);
            int temp = arr[i];
            arr[i] = arr[Index];
            arr[Index] = temp;
        }
    }
}
