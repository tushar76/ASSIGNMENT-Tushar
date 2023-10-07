
import java.util.Arrays;
import java.util.Random;
public class ShuffleArray {
	public static void main(String[] args) {		
		int[] arr = { 1, 2, 3, 4, 5, 6, 7 };	
		Random rand = new Random();	
		for (int i = 0; i < arr.length; i++) {
			int randomSwap = rand.nextInt(arr.length);
			int t = arr[randomSwap];
			arr[randomSwap] = arr[i];
			arr[i] = t;
		}
		System.out.println(Arrays.toString(arr));
	}
}