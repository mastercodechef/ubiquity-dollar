/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface CurveUADIncentiveInterface extends ethers.utils.Interface {
  functions: {
    "incentivize(address,address,address,uint256)": FunctionFragment;
    "isBuyIncentiveOn()": FunctionFragment;
    "isExemptAddress(address)": FunctionFragment;
    "isSellPenaltyOn()": FunctionFragment;
    "manager()": FunctionFragment;
    "setExemptAddress(address,bool)": FunctionFragment;
    "switchBuyIncentive()": FunctionFragment;
    "switchSellPenalty()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "incentivize",
    values: [string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isBuyIncentiveOn",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isExemptAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isSellPenaltyOn",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setExemptAddress",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "switchBuyIncentive",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "switchSellPenalty",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "incentivize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBuyIncentiveOn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isExemptAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSellPenaltyOn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setExemptAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "switchBuyIncentive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "switchSellPenalty",
    data: BytesLike
  ): Result;

  events: {
    "ExemptAddressUpdate(address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExemptAddressUpdate"): EventFragment;
}

export class CurveUADIncentive extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: CurveUADIncentiveInterface;

  functions: {
    incentivize(
      sender: string,
      receiver: string,
      arg2: string,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "incentivize(address,address,address,uint256)"(
      sender: string,
      receiver: string,
      arg2: string,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isBuyIncentiveOn(overrides?: CallOverrides): Promise<[boolean]>;

    "isBuyIncentiveOn()"(overrides?: CallOverrides): Promise<[boolean]>;

    isExemptAddress(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isExemptAddress(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isSellPenaltyOn(overrides?: CallOverrides): Promise<[boolean]>;

    "isSellPenaltyOn()"(overrides?: CallOverrides): Promise<[boolean]>;

    manager(overrides?: CallOverrides): Promise<[string]>;

    "manager()"(overrides?: CallOverrides): Promise<[string]>;

    setExemptAddress(
      account: string,
      isExempt: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setExemptAddress(address,bool)"(
      account: string,
      isExempt: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    switchBuyIncentive(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "switchBuyIncentive()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    switchSellPenalty(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "switchSellPenalty()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  incentivize(
    sender: string,
    receiver: string,
    arg2: string,
    amountIn: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "incentivize(address,address,address,uint256)"(
    sender: string,
    receiver: string,
    arg2: string,
    amountIn: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isBuyIncentiveOn(overrides?: CallOverrides): Promise<boolean>;

  "isBuyIncentiveOn()"(overrides?: CallOverrides): Promise<boolean>;

  isExemptAddress(account: string, overrides?: CallOverrides): Promise<boolean>;

  "isExemptAddress(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isSellPenaltyOn(overrides?: CallOverrides): Promise<boolean>;

  "isSellPenaltyOn()"(overrides?: CallOverrides): Promise<boolean>;

  manager(overrides?: CallOverrides): Promise<string>;

  "manager()"(overrides?: CallOverrides): Promise<string>;

  setExemptAddress(
    account: string,
    isExempt: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setExemptAddress(address,bool)"(
    account: string,
    isExempt: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  switchBuyIncentive(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "switchBuyIncentive()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  switchSellPenalty(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "switchSellPenalty()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    incentivize(
      sender: string,
      receiver: string,
      arg2: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "incentivize(address,address,address,uint256)"(
      sender: string,
      receiver: string,
      arg2: string,
      amountIn: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isBuyIncentiveOn(overrides?: CallOverrides): Promise<boolean>;

    "isBuyIncentiveOn()"(overrides?: CallOverrides): Promise<boolean>;

    isExemptAddress(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isExemptAddress(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isSellPenaltyOn(overrides?: CallOverrides): Promise<boolean>;

    "isSellPenaltyOn()"(overrides?: CallOverrides): Promise<boolean>;

    manager(overrides?: CallOverrides): Promise<string>;

    "manager()"(overrides?: CallOverrides): Promise<string>;

    setExemptAddress(
      account: string,
      isExempt: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setExemptAddress(address,bool)"(
      account: string,
      isExempt: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    switchBuyIncentive(overrides?: CallOverrides): Promise<void>;

    "switchBuyIncentive()"(overrides?: CallOverrides): Promise<void>;

    switchSellPenalty(overrides?: CallOverrides): Promise<void>;

    "switchSellPenalty()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    ExemptAddressUpdate(
      _account: string | null,
      _isExempt: null
    ): TypedEventFilter<
      [string, boolean],
      { _account: string; _isExempt: boolean }
    >;
  };

  estimateGas: {
    incentivize(
      sender: string,
      receiver: string,
      arg2: string,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "incentivize(address,address,address,uint256)"(
      sender: string,
      receiver: string,
      arg2: string,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isBuyIncentiveOn(overrides?: CallOverrides): Promise<BigNumber>;

    "isBuyIncentiveOn()"(overrides?: CallOverrides): Promise<BigNumber>;

    isExemptAddress(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isExemptAddress(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSellPenaltyOn(overrides?: CallOverrides): Promise<BigNumber>;

    "isSellPenaltyOn()"(overrides?: CallOverrides): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    "manager()"(overrides?: CallOverrides): Promise<BigNumber>;

    setExemptAddress(
      account: string,
      isExempt: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setExemptAddress(address,bool)"(
      account: string,
      isExempt: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    switchBuyIncentive(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "switchBuyIncentive()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    switchSellPenalty(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "switchSellPenalty()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    incentivize(
      sender: string,
      receiver: string,
      arg2: string,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "incentivize(address,address,address,uint256)"(
      sender: string,
      receiver: string,
      arg2: string,
      amountIn: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isBuyIncentiveOn(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isBuyIncentiveOn()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isExemptAddress(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isExemptAddress(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSellPenaltyOn(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isSellPenaltyOn()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "manager()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setExemptAddress(
      account: string,
      isExempt: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setExemptAddress(address,bool)"(
      account: string,
      isExempt: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    switchBuyIncentive(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "switchBuyIncentive()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    switchSellPenalty(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "switchSellPenalty()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}