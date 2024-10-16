"use client";

import { useState, ChangeEvent } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TipCalculator = () => {
    const [billAmount, setBillAmount] = useState<number | null>(null);
    const [tipPercentage, setTipPercentage] = useState<number | null>(null);
    const [tipAmount, setTipAmount] = useState<number>(0);
    const [totalAmount, setTotalAmount] = useState<number>(0);
  
    const handleBillAmountChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setBillAmount(parseFloat(e.target.value));
    };
  
    const handleTipPercentageChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setTipPercentage(parseFloat(e.target.value));
    };
  
    const calculateTip = (): void => {
      if (billAmount !== null && tipPercentage !== null) {
        const tip = billAmount * (tipPercentage / 100);
        setTipAmount(tip);
        setTotalAmount(billAmount + tip);
      }
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-300 via-blue-400 to-purple-500 p-6">
        {/* Quote Section */}
        <div className="mb-8 text-center">
          <h2 className="text-xl font-semibold text-white mb-2">
            `The smallest tips can make the biggest difference!`
          </h2>
          <p className="text-white text-sm italic">
            Calculate tips effortlessly, save time, and brighten someone`s day.
          </p>
        </div>
  
        <Card className="w-full max-w-md p-6 bg-white dark:bg-gray-800 shadow-2xl rounded-xl transform transition-all hover:scale-105 duration-300 ease-out">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-700 dark:text-gray-200">Tip Calculator</CardTitle>
            <CardDescription className="text-gray-500 dark:text-gray-400">
              Enter the bill amount and tip percentage to calculate the tip and total.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="bill-amount" className="text-gray-600 dark:text-gray-300">Bill Amount</Label>
              <Input
                id="bill-amount"
                type="number"
                placeholder="Enter bill amount"
                value={billAmount !== null ? billAmount : ""}
                onChange={handleBillAmountChange}
                className="rounded-lg focus:ring-blue-500"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="tip-percentage" className="text-gray-600 dark:text-gray-300">Tip Percentage</Label>
              <Input
                id="tip-percentage"
                type="number"
                placeholder="Enter tip percentage"
                value={tipPercentage !== null ? tipPercentage : ""}
                onChange={handleTipPercentageChange}
                className="rounded-lg focus:ring-blue-500"
              />
            </div>
            <Button 
              onClick={calculateTip} 
              className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-transform duration-300 ease-in-out hover:scale-110"
            >
              Calculate
            </Button>
          </CardContent>
          <CardFooter className="grid gap-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Tip Amount:</span>
              <span className="font-bold text-lg text-gray-800 dark:text-gray-100">${tipAmount.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-300">Total Amount:</span>
              <span className="font-bold text-lg text-gray-800 dark:text-gray-100">${totalAmount.toFixed(2)}</span>
            </div>
          </CardFooter>
        </Card>
        <div >
    <p className="text-gray-700 dark:text-gray-300 font-semibold text-sm">
      Made by Anum
    </p>
</div>
      </div>
    );
  };
  
  export default TipCalculator;


