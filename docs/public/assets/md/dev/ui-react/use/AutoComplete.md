

## API

#### TAutoCompleteValue

```ts
type TAutoCompleteValue = string | Array<string>;
```

#### TAutoCompleteOption

```ts
type TAutoCompleteOption = {
    label?: string;
    version?: 'text' | 'subheader';
    noOptions?: boolean;
};
```

#### IAutoComplete

```ts
interface IAutoComplete extends ITextField {
    valueInput?: TAutoCompleteValue;
    valueInputDefault?: TAutoCompleteValue;
    onChangeInput?: (value: TAutoCompleteValue) => any;
    multiple?: boolean;
    autoWidth?: boolean;
    readOnly?: boolean;
    getLabel?: (element: TElement, props: TPropsAny) => TElement;
    renderValues?: (value: TAutoCompleteValue, onUnselect: (value: string) => any) => TElement;
    renderChip?: (value: any, props: TPropsAny) => TElement;
    renderOption?: (item: TAutoCompleteOption, index: number, props: TPropsAny) => TElement;
    chip?: boolean;
    optionEqualValue?: (value: string, item: TAutoCompleteOption) => boolean;
    filter?: (value: string, options: Array<TAutoCompleteOption>) => Array<TAutoCompleteOption>;
    options?: Array<TAutoCompleteOption>;
    clear?: boolean;
    loading?: boolean;
    autoSelectOnBlur?: boolean;
    blurOnSelect?: boolean;
    noOptions?: boolean;
    openOnFocus?: boolean;
    closeOnSelect?: boolean;
    clearOnEscape?: boolean;
    groupBy?: (value: TAutoCompleteOption) => string;
    limit?: number;
    filterOutSelectedOptions?: boolean;
    selectOnFocus?: boolean;
    clearOnBlur?: boolean;
    disabled?: boolean;
    IconClear?: TElementReference;
    ChipGroupProps?: TPropsAny;
    ListProps?: TPropsAny;
    MenuProps?: TPropsAny;
}
```

#### AutoComplete

```ts
const AutoComplete: React.ForwardRefExoticComponent<Omit<IAutoComplete, "ref"> & React.RefAttributes<unknown>>;
```


~{
  "element": "BottomNavigation",
  "props": {
    "previous": {
      "label": "UI react: AreaChartItem",
      "to": "/dev/ui-react/use/AreaChartItem"
    },
    "next": {
      "label": "UI react: Avatar",
      "to": "/dev/ui-react/use/Avatar"
    }
  }
}~
