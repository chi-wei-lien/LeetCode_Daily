#include <iostream>

using namespace std;

class Solution
{
public:
  string longestPalindrome(string s)
  {
    int longest = 1;
    string longestPal;
    longestPal += s[0];
    int left;
    int right;
    int n = s.length();
    for (int i = 1; i < n; i++)
    {
      checkPalindrome(i - 1, i + 1, &longest, longestPal, s);
      if (s[i - 1] == s[i])
      {
        checkPalindrome(i - 1, i, &longest, longestPal, s);
      }
    }
    return longestPal;
  }

private:
  void checkPalindrome(int right, int left, int* longest, string &longestPal, string &s)
  {
    int n = s.length();
    while (left >= 0 && right < n)
      {
        if (s[left] != s[right])
        {
          break;
        }
        if (right - left + 1 > *longest)
        {
          *longest = right - left;
          longestPal = s.substr(left, right - left + 1);
        }
        right++;
        left--;
      }
  }
};
