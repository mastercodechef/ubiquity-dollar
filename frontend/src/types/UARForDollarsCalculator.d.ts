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

interface UARForDollarsCalculatorInterface extends ethers.utils.Interface {
  functions: {
    "getConstant()": FunctionFragment;
    "getUARAmount(uint256,uint256)": FunctionFragment;
    "manager()": FunctionFragment;
    "setConstant(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getConstant",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUARAmount",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setConstant",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getConstant",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUARAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setConstant",
    data: BytesLike
  ): Result;

  events: {};
}

export class UARForDollarsCalculator extends Contract {
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

  interface: UARForDollarsCalculatorInterface;

  functions: {
    getConstant(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getConstant()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getUARAmount(
      dollarsToBurn: BigNumberish,
      blockHeightDebt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getUARAmount(uint256,uint256)"(
      dollarsToBurn: BigNumberish,
      blockHeightDebt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    manager(overrides?: CallOverrides): Promise<[string]>;

    "manager()"(overrides?: CallOverrides): Promise<[string]>;

    setConstant(
      coef: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setConstant(uint256)"(
      coef: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getConstant(overrides?: CallOverrides): Promise<BigNumber>;

  "getConstant()"(overrides?: CallOverrides): Promise<BigNumber>;

  getUARAmount(
    dollarsToBurn: BigNumberish,
    blockHeightDebt: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getUARAmount(uint256,uint256)"(
    dollarsToBurn: BigNumberish,
    blockHeightDebt: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  manager(overrides?: CallOverrides): Promise<string>;

  "manager()"(overrides?: CallOverrides): Promise<string>;

  setConstant(
    coef: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setConstant(uint256)"(
    coef: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getConstant(overrides?: CallOverrides): Promise<BigNumber>;

    "getConstant()"(overrides?: CallOverrides): Promise<BigNumber>;

    getUARAmount(
      dollarsToBurn: BigNumberish,
      blockHeightDebt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUARAmount(uint256,uint256)"(
      dollarsToBurn: BigNumberish,
      blockHeightDebt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<string>;

    "manager()"(overrides?: CallOverrides): Promise<string>;

    setConstant(coef: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setConstant(uint256)"(
      coef: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getConstant(overrides?: CallOverrides): Promise<BigNumber>;

    "getConstant()"(overrides?: CallOverrides): Promise<BigNumber>;

    getUARAmount(
      dollarsToBurn: BigNumberish,
      blockHeightDebt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUARAmount(uint256,uint256)"(
      dollarsToBurn: BigNumberish,
      blockHeightDebt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    "manager()"(overrides?: CallOverrides): Promise<BigNumber>;

    setConstant(
      coef: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setConstant(uint256)"(
      coef: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getConstant(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getConstant()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUARAmount(
      dollarsToBurn: BigNumberish,
      blockHeightDebt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUARAmount(uint256,uint256)"(
      dollarsToBurn: BigNumberish,
      blockHeightDebt: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "manager()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setConstant(
      coef: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setConstant(uint256)"(
      coef: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}