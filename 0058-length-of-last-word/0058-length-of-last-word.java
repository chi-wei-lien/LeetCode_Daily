class Solution {
    public int lengthOfLastWord(String s) {
        int last = 0;
        int temp = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == ' ') {
                if (temp != 0) {
                    last = temp;
                }
                temp = 0;
            }
            else {
                temp++;
            }
        }
        if (temp != 0) {return temp;}
        return last;
    }
}