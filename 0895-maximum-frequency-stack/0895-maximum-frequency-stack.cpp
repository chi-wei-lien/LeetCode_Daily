#include <iostream>
#include <unordered_map>
#include <utility>

using namespace std;


class FreqStack
{
public:
  unordered_map<int, int> freq;
  unordered_map<int, stack<int> > freq_stack;
  int max_freq = 0;

  FreqStack()
  {
  }

  void push(int val)
  {
    ++freq[val];
    max_freq = max(max_freq, freq[val]);
    freq_stack[freq[val]].push(val);
  }

  int pop()
  {
    int top = freq_stack[max_freq].top();
    freq_stack[max_freq].pop();
    --freq[top];
    if (freq_stack[max_freq].empty()) max_freq--;
    return top;
  }
};