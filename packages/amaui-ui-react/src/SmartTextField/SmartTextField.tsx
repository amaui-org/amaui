import React from 'react';

import { innerHTMLToText, is, isEnvironment, parse, stringToColor, textToInnerHTML } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import TextField, { ITextField } from '../TextField/TextField';
import Icon, { IIcon } from '../Icon';
import Line from '../Line';
import List from '../List';
import ListItem from '../ListItem';
import Avatar from '../Avatar';
import Type from '../Type';
import Surface from '../Surface';
import Button from '../Button';
import Append from '../Append';
import Fade from '../Fade';
import Tooltip from '../Tooltip';
import ToggleButton from '../ToggleButton';
import ClickListener from '../ClickListener';
import ToggleButtons from '../ToggleButtons';
import Menu from '../Menu';
import { sanitize, caret, keyboardStyleCommands, staticClassName } from '../utils';

const IconMaterialFormatItalicRounded = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatItalic'

      short_name='FormatItalic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 20q-.625 0-1.062-.438Q5 19.125 5 18.5t.438-1.062Q5.875 17 6.5 17h1.875l4-10H10.5q-.625 0-1.062-.438Q9 6.125 9 5.5t.438-1.062Q9.875 4 10.5 4h7q.625 0 1.062.438Q19 4.875 19 5.5t-.438 1.062Q18.125 7 17.5 7h-1.875l-4 10H13.5q.625 0 1.062.438.438.437.438 1.062t-.438 1.062Q14.125 20 13.5 20Z" />
    </Icon>
  );
});

const IconMaterialFormatUnderlinedRounded = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatUnderlined'

      short_name='FormatUnderlined'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21q-.425 0-.713-.288Q5 20.425 5 20t.287-.712Q5.575 19 6 19h12q.425 0 .712.288.288.287.288.712t-.288.712Q18.425 21 18 21Zm6-4q-2.525 0-4.263-1.738Q6 13.525 6 11V4.25q0-.525.363-.888Q6.725 3 7.25 3t.887.362q.363.363.363.888V11q0 1.475 1.012 2.488Q10.525 14.5 12 14.5t2.488-1.012Q15.5 12.475 15.5 11V4.25q0-.525.363-.888Q16.225 3 16.75 3t.888.362q.362.363.362.888V11q0 2.525-1.738 4.262Q14.525 17 12 17Z" />
    </Icon>
  );
});

const IconMaterialStrikethroughSRounded = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrikethroughS'

      short_name='StrikethroughS'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.15 20q-1.625 0-2.925-.812-1.3-.813-2.1-2.288-.225-.425-.05-.9.175-.475.675-.675.425-.2.863-.025.437.175.712.625.45.75 1.187 1.213.738.462 1.688.462 1.05 0 1.9-.5.85-.5.85-1.6 0-.45-.175-.825Q14.6 14.3 14.3 14h2.8q.125.35.188.712.062.363.062.788 0 2.15-1.538 3.325Q14.275 20 12.15 20ZM3 12q-.425 0-.712-.288Q2 11.425 2 11t.288-.713Q2.575 10 3 10h18q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 12 21 12Zm4.25-4q.05-1.725 1.363-2.938Q9.925 3.85 12.05 3.85q1.35 0 2.425.537 1.075.538 1.8 1.663.275.425.1.9-.175.475-.675.7-.375.175-.812.038-.438-.138-.788-.563-.325-.375-.825-.625-.5-.25-1.175-.25-1.025 0-1.7.463-.675.462-.75 1.287Z" />
    </Icon>
  );
});

const IconMaterialFormatBoldRounded = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatBold'

      short_name='FormatBold'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 18q-.825 0-1.412-.587Q7 16.825 7 16V6q0-.825.588-1.412Q8.175 4 9 4h3.5q1.7 0 2.975.975 1.275.975 1.275 2.675 0 1.2-.55 1.912-.55.713-1.3 1.088v.2q1.1.375 1.725 1.175t.625 2.075q0 1.875-1.363 2.888Q14.525 18 12.65 18Zm.65-8.3h2.65q.825 0 1.363-.475.537-.475.537-1.2t-.537-1.2q-.538-.475-1.363-.475H9.65Zm0 5.9h2.85q.975 0 1.538-.5.562-.5.562-1.325t-.562-1.325q-.563-.5-1.538-.5H9.65Z" />
    </Icon>
  );
});

const IconMaterialAddLinkRounded = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLink'

      short_name='AddLink'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17q-2.075 0-3.537-1.463Q2 14.075 2 12t1.463-3.538Q4.925 7 7 7h3q.425 0 .713.287Q11 7.575 11 8t-.287.712Q10.425 9 10 9H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h3q.425 0 .713.287.287.288.287.713t-.287.712Q10.425 17 10 17Zm2-4q-.425 0-.712-.288Q8 12.425 8 12t.288-.713Q8.575 11 9 11h6q.425 0 .713.287.287.288.287.713t-.287.712Q15.425 13 15 13Zm13-1h-2q0-1.25-.875-2.125T17 9h-3q-.425 0-.712-.288Q13 8.425 13 8t.288-.713Q13.575 7 14 7h3q2.075 0 3.538 1.462Q22 9.925 22 12Zm-4 8q-.425 0-.712-.288Q17 19.425 17 19v-2h-2q-.425 0-.712-.288Q14 16.425 14 16t.288-.713Q14.575 15 15 15h2v-2q0-.425.288-.713Q17.575 12 18 12t.712.287Q19 12.575 19 13v2h2q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 17 21 17h-2v2q0 .425-.288.712Q18.425 20 18 20Z" />
    </Icon>
  );
});

const IconMaterialLinkOffRounded = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LinkOff'

      short_name='LinkOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.825 13-2-2h2q.425 0 .713.287.287.288.287.713t-.287.712q-.288.288-.713.288Zm3.425 3.45-1.5-1.55q.975-.275 1.613-1.063Q20 13.05 20 12q0-1.25-.875-2.125T17 9h-3q-.425 0-.712-.288Q13 8.425 13 8t.288-.713Q13.575 7 14 7h3q2.075 0 3.538 1.438Q22 9.875 22 12q0 1.425-.75 2.637-.75 1.213-2 1.813Zm-.15 5.45-17-17q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM10 17H7q-2.075 0-3.537-1.463Q2 14.075 2 12q0-1.75 1.062-3.088Q4.125 7.575 5.75 7.15L7.6 9H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h3q.425 0 .713.287.287.288.287.713t-.287.712Q10.425 17 10 17Zm1.6-4H8.175q-.425 0-.712-.288-.288-.287-.288-.712t.288-.713Q7.75 11 8.175 11h1.45Z" />
    </Icon>
  );
});

const IconMaterialFormatClearRounded = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatClear'

      short_name='FormatClear'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.2 10.35-2.325-2.325L7.85 5H18.5q.625 0 1.062.438Q20 5.875 20 6.5t-.438 1.062Q19.125 8 18.5 8h-4.3Zm5.9 11.55-7.6-7.6-1.6 3.775q-.175.425-.562.675Q8.95 19 8.5 19q-.8 0-1.25-.675-.45-.675-.125-1.425L9.2 12 2.1 4.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z" />
    </Icon>
  );
});

const useStyle = styleMethod(theme => ({
  root: {
    minHeight: 20,
    width: '100%',

    '& .amaui-TextField-input': {
      wordBreak: 'break-word',
      color: theme.methods.palette.color.value('primary', 10),

      ...theme.typography.values.b2
    }
  },

  root_type: {
    minHeight: 20,
    width: '100%',
    cursor: 'text',

    '& .amaui-TextField-input': {
      wordBreak: 'break-word',
      color: theme.methods.palette.color.value('primary', 10),

      ...theme.typography.values.b2
    }
  },

  menu: {
    width: '100vw',
    maxWidth: 240,
    borderRadius: theme.methods.shape.radius.value(2.5),
    boxShadow: '0px 4px 32px 0px rgba(0, 0, 0, 0.04)',
    background: theme.palette.light ? theme.palette.color.neutral[99] : theme.palette.color.neutral[20]
  },

  list: {
    maxHeight: 240,
    overflow: 'hidden auto'
  },

  textMiniMenuWrapper: {
    paddingBlock: 8
  },

  textMiniMenu: {
    padding: 12,
    borderRadius: theme.methods.shape.radius.value(140, 'px'),
    boxShadow: theme.shadows.values.default[2]
  },

  textMiniMenuAdditionaMenu: {
    zIndex: 1514
  },

  inputWrapper: {
    padding: 8,
    borderRadius: 8,
    boxShadow: theme.shadows.values.default[2]
  },

  singleLine: {
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }
}), { name: 'amaui-SmartTextField' });

export interface ISmartTextField extends ITextField {
  placeholder?: any;

  edit?: boolean;

  mention?: boolean;

  multiline?: boolean;

  readOnly?: boolean;

  onChangeMention?: (value?: string, version?: '@') => any;

  optionsMention?: any[];

  mentionLabel?: (items: any[], props: { addTag?: (value: any) => any }) => any;

  additional?: any;
}

const SmartTextField: React.FC<ISmartTextField> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiSmartTextField?.props?.default, ...props_ }), [props_]);

  const {
    version = 'type',

    valueDefault,

    value: value_,

    inputProps,

    onChange,

    error: error_,

    placeholder,

    edit,

    mention,

    multiline,

    onChangeMention,

    optionsMention: optionsMention_,

    mentionLabel,

    onKeyDown: onKeyDown_,

    readOnly,

    additional,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const [value, setValue] = React.useState<any>(valueDefault || '');
  const [openMenu, setOpenMenu] = React.useState<any>(false);
  const [offset, setOffset] = React.useState<any>([0, 8]);
  const [selectionMenu, setSelectionMenu] = React.useState<any>();
  const [optionsMention, setOptionsMention] = React.useState<any>([]);
  const [textSelection, setTextSelection] = React.useState<{ selection: DOMRect; element: HTMLElement; }>();
  const [textSelected, setTextSelected] = React.useState<any>([]);
  const [open, setOpen] = React.useState<any>({});
  const [inputValues, setInputValues] = React.useState<any>({});

  const refs = {
    root: React.useRef<any>(),
    input: React.useRef(),
    searchElement: React.useRef<any>(),
    error: React.useRef<any>(),
    search: React.useRef<any>(),
    open: React.useRef<any>(),
    openMenu: React.useRef<any>(),
    selectionMenu: React.useRef<any>(),
    caret: React.useRef<any>(),
    value: React.useRef<any>(),
    version: React.useRef<any>(version),
    optionsMention: React.useRef(optionsMention),
    validateMeta: React.useRef<any>({}),
    range: React.useRef<any>(),
    inputValues: React.useRef<any>(),
    miniMenu: React.useRef<any>(),
    miniMenuElements: {
      color: React.useRef<any>(),
      colorPalette: React.useRef<any>(),
      background: React.useRef<any>(),
      backgroundPalette: React.useRef<any>(),
      linkAdd: React.useRef<any>(),
      linkAddInput: React.useRef<any>(),
      linkRemove: React.useRef<any>()
    },
    textSelected: React.useRef<any>(),
    textSelection: React.useRef<any>(),
    rootDocument: React.useRef<Document>(),
    rootWindow: React.useRef<Window>(),
    edit: React.useRef(edit),
    multiline: React.useRef(multiline),
    readOnly: React.useRef(readOnly),
    onChange: React.useRef(onChange)
  };

  refs.value.current = value;

  refs.version.current = version;

  refs.open.current = open;

  refs.openMenu.current = openMenu;

  refs.selectionMenu.current = selectionMenu;

  refs.optionsMention.current = optionsMention;

  refs.inputValues.current = inputValues;

  refs.textSelected.current = textSelected;

  refs.textSelection.current = textSelection;

  refs.edit.current = edit;

  refs.multiline.current = multiline;

  refs.readOnly.current = readOnly;

  refs.onChange.current = onChange;

  const rootDocument = isEnvironment('browser') && (refs.root.current?.ownerDocument || window.document);

  const rootWindow = rootDocument && (rootDocument.defaultView || window);

  refs.rootDocument.current = rootDocument;

  refs.rootWindow.current = rootWindow;

  const init = React.useCallback(() => {
    if (version === 'type') {
      const valueNew = valueDefault || value || '';

      if (refs.root.current) {
        refs.root.current.innerHTML = valueNew;
      }
    }
  }, [version, value, valueDefault]);

  React.useEffect(() => {
    // init
    init();
  }, []);

  React.useEffect(() => {
    if (optionsMention !== optionsMention_) setOptionsMention(optionsMention_);
  }, [optionsMention_]);

  React.useEffect(() => {
    const valuePrevious = (refs.root.current!.innerHTML || '').replaceAll('&nbsp;', ' ');

    const valueNew = textToInnerHTML(value_);

    if (value_ !== undefined && valuePrevious !== valueNew) validate(!value_ ? '' : sanitize(value_ as string));
  }, [value_]);

  // Save selection to revive, use it on execComand
  React.useEffect(() => {
    const selection_ = refs.rootWindow.current!.getSelection();

    if (
      selection_ &&
      selection_.anchorNode &&
      !(selection_.anchorNode as any)?.className?.includes('TextField')
    ) refs.range.current = selection_.getRangeAt(0);
  }, [open]);

  const updateInputValues = (property: string, itemValue: any) => {
    setInputValues((values: any) => ({
      ...values,

      [property]: itemValue
    }));
  };

  const updateOpen = (property: string, itemValue: any) => {
    setOpen((values: any) => ({
      ...values,

      [property]: itemValue
    }));
  };

  const validateElement = React.useCallback((element: any) => {
    if (element?.children) {
      Array.from(element?.children).forEach((child: any) => {
        // Any tag
        if (child.dataset.amauiVersion === 'mention-user') {
          // Replace the child if label & textContent don't match
          if (child.dataset.amauiLabel !== child.innerHTML) {
            element.replaceChild(
              window.document.createTextNode(child.textContent),
              child
            );

            refs.validateMeta.current.restore = true;
          }
        }

        if (child?.children) validateElement(child);
      });
    }
  }, []);

  const validate = React.useCallback((valueNew: any = undefined) => {
    // Save caret position
    refs.caret.current = caret.save(refs.root.current);

    // Update the root innerHTML
    if (valueNew !== undefined) refs.root.current.innerHTML = valueNew;

    refs.validateMeta.current.restore = false;

    // Find all span amaui-mention children
    // if they aren't valid, replace them with text node of their textContent
    validateElement(refs.root.current);

    if (refs.validateMeta.current.restore) caret.restore(refs.root.current, refs.caret.current);

    return refs.root.current.innerHTML;
  }, []);

  const getAtSearchData = React.useCallback(() => {
    if (refs.root.current) {
      const windowSelection = window.document.getSelection();

      if (!(windowSelection && windowSelection.rangeCount > 0)) return;

      const range = windowSelection?.getRangeAt(0);

      if (!range) return;

      // Only allow for text not in span user mention element
      if (windowSelection!.anchorNode?.parentElement?.dataset?.amauiVersion === 'mention-user') return '';

      // Text
      if (!['text', '#text'].includes(range?.commonAncestorContainer?.nodeName)) return '';

      const text = windowSelection!.anchorNode?.textContent || '';

      const start = text.slice(0, range.endOffset).split('').reverse().join('');

      let result: any = [];

      for (const valueText of start) {
        // All characters other than space, numbers
        if (!!valueText.match(/[^<>\\/\n\r\t]/)) result.unshift(valueText);
        else break;

        if (['@'].includes(valueText)) break;
      }

      result = result.includes('@') ? result.join('') : '';

      // Allow 1 space only
      if (result && result.match(/\s{2}/g)) return '';

      return result;
    }
  }, []);

  refs.search.current = getAtSearchData();

  const onInput = React.useCallback((event?: Event) => {
    if (refs.root.current) {
      let valueInput = refs.root.current!.innerHTML || '';

      if (refs.root.current.textContent === '') {
        valueInput = '';

        refs.root.current!.innerHTML = '';
      }

      if (!refs.multiline.current) {
        const previous = valueInput;

        valueInput = valueInput.replace(/\r?\n|\r/gm, '');

        if (previous !== valueInput) refs.root.current!.innerHTML = valueInput;
      }

      valueInput = innerHTMLToText(valueInput);

      setValue(valueInput);

      if (is('function', refs.onChange.current)) refs.onChange.current!(valueInput, event as any);
    }
  }, []);

  React.useEffect(() => {
    if (mention && refs.search.current !== undefined) onChangeMention?.(refs.search.current, '@');
  }, [mention, refs.search.current]);

  React.useEffect(() => {
    const method = () => {
      if (window.document.activeElement === refs.input.current) onInput();
    };

    window.document.addEventListener('selectionchange', method);

    onChangeMention?.(refs.search.current, '@');

    return () => {
      window.document.removeEventListener('selectionchange', method);
    };
  }, []);

  const updateSelection = React.useCallback(() => {
    const windowSelection = window.document.getSelection();

    if (!(windowSelection && windowSelection.rangeCount > 0)) return;

    const range = windowSelection?.getRangeAt(0);

    if (range) setSelectionMenu(range?.getBoundingClientRect());
  }, []);

  const onOpenSearch = React.useCallback(async () => {
    if (!refs.openMenu.current && !!refs.optionsMention.current.length) {
      // open
      setOpenMenu(true);

      // selection
      updateSelection();
    }
  }, []);

  const onCloseSearch = React.useCallback(() => {
    if (refs.openMenu.current) {
      setOpenMenu(false);

      setSelectionMenu(null);
    }
  }, []);

  const updateOffset = React.useCallback(() => {
    setOffset([-(refs.searchElement.current?.clientWidth || 0), 8]);
  }, []);

  const onFocus = React.useCallback(() => {
    // setFocus(true);
  }, []);

  const onBlur = React.useCallback(() => {
    // setFocus(false);
  }, []);

  const onKeyDown = React.useCallback((event: KeyboardEvent) => {
    const windowSelection = window.getSelection();

    if (windowSelection) {
      // if (event.key === 'Enter') {
      //   event.preventDefault();

      //   const anchor = windowSelection.anchorNode as HTMLElement;
      //   const element = anchor.parentElement;

      //   const multiple = anchor.tagName === 'P' && anchor.children.length === 1 && anchor.children[0].tagName === 'BR';

      //   window.document.execCommand('insertHTML', false, `<p><br /></p>`.repeat(multiple ? 2 : 1));

      //   const range = new Range();

      //   const rangeStartElement = ((multiple ? anchor : element) as any)?.nextElementSibling;

      //   if (rangeStartElement) range.setStart(rangeStartElement, 0);

      //   windowSelection.removeAllRanges();
      //   windowSelection.addRange(range);
      // }

      if (event.key === 'ArrowRight') {
        // If in user mention span
        // move out of it with adding new empty space root node after the user mention span
        // only if caret is at the end of the span, & span is last child of it's parent
        if (!(windowSelection && windowSelection.rangeCount > 0)) return;

        const range = windowSelection.getRangeAt(0);

        const caretElement = windowSelection.anchorNode!.parentElement;
        const caretElementParent = caretElement!.parentElement as HTMLElement;
        const caretElementParentChildNodes = Array.from(caretElementParent!.childNodes);

        if (
          caretElement?.dataset?.amauiVersion === 'mention-user' &&
          range.endOffset === windowSelection.anchorNode!.textContent!.length &&
          caretElementParentChildNodes[caretElementParentChildNodes.length - 1] === caretElement
        ) {
          caretElementParent.insertBefore(window.document.createTextNode('\u00A0'), caretElement.nextElementSibling);
        }
      }
    }

    if (!refs.multiline.current) {
      if (event.key === 'Enter') {
        event.preventDefault();
      }
    }

    if (
      !refs.edit.current &&
      (
        (
          event.metaKey && (
            keyboardStyleCommands.includes(event.key)
          )
        ) ||
        (
          event.ctrlKey && (
            keyboardStyleCommands.includes(event.key)
          )
        )
      )
    ) {
      event.preventDefault();
    }

    if (is('function', onKeyDown_)) onKeyDown_(event);
  }, [onKeyDown_]);

  const onPaste = React.useCallback((event: ClipboardEvent) => {
    event.preventDefault();

    const text = event.clipboardData?.getData('text/plain');

    window.document.execCommand('insertText', false, text);
  }, []);

  const onDrop = React.useCallback((event: DragEvent) => {
    event.preventDefault();
  }, []);

  const addTag = React.useCallback((item: any, versionMention = 'user') => {
    // Save caret position
    refs.caret.current = caret.save(refs.root.current);

    const name = item.name;

    const classesElement = ['amaui-mention'];

    // Query text node that equals selection anchorNode
    // and replace its textContent's search value with new span
    const windowSelection = window.document.getSelection();

    if (!(windowSelection && windowSelection.rangeCount > 0)) return;

    const range = windowSelection?.getRangeAt(0);

    if (!range) return;

    const textNode: any = windowSelection!.anchorNode;
    const textContent = textNode.textContent;

    // Bug fix
    // only be able to insert data within the input
    // if by accident selection went outside the input
    // basically do nothing with it
    if (refs.root.current.contains(textNode.parentElement)) {
      const end = range.endOffset;
      const start = end - refs.search.current.length;

      const pre = textContent.slice(0, start);
      const post = textContent.slice(end);

      // Insert before anchorNode pre, item mention, and post
      if (pre) textNode.parentElement.insertBefore(window.document.createTextNode(pre), windowSelection!.anchorNode);

      const span = window.document.createElement('span');

      span.className = classesElement.join(' ');

      span.dataset.amauiLabel = `@${name}`;
      span.dataset.amauiVersion = `mention-${versionMention}`;
      span.dataset.amauiObject = `${versionMention}`;
      span.dataset.amauiId = item.id;

      span.innerHTML = `@${name}`;

      textNode.parentElement.insertBefore(span, windowSelection!.anchorNode);

      // 1 space only following the item mention
      textNode.parentElement.insertBefore(window.document.createTextNode('\u00A0'), windowSelection!.anchorNode);

      if (post) textNode.parentElement.insertBefore(window.document.createTextNode(post), windowSelection!.anchorNode);

      // Remove the text node
      textNode.remove();

      // Invoke onChange method with new value
      const valueInput = innerHTMLToText(refs.root.current.innerHTML);

      if (is('function', refs.onChange.current)) refs.onChange.current!(valueInput, { target: refs.root.current } as any);

      // Update the caret position to be outside the span mention
      // for amount of added characters + 1 space
      const added = `@${name}`.length - refs.search.current.length + 1;

      refs.caret.current.start = refs.caret.current.end += added;

      caret.restore(refs.root.current, refs.caret.current);
    }

    // Close the search
    onCloseSearch();
  }, [onChange]);

  // If users response & not open, open
  // else if no users response & opened, close the search
  React.useEffect(() => {
    if (mention) {
      if (refs.openMenu.current && !optionsMention.length) onCloseSearch();
      else if (!refs.openMenu.current && refs.search.current && !!optionsMention.length) onOpenSearch();
    }
  }, [mention, optionsMention]);

  React.useEffect(() => {
    if (mention) {
      // Validate
      validate();

      // Update
      // open, selection & offset
      setTimeout(() => {
        refs.search.current ? onOpenSearch() : onCloseSearch();

        if (refs.openMenu.current) updateSelection();

        updateOffset();
      });
    }
  }, [mention, value]);

  React.useEffect(() => {
    // setError(error_);
  }, [error_]);

  const label = React.useCallback(() => (
    is('function', mentionLabel) ? mentionLabel!(refs.optionsMention.current, { addTag }) :
      <Line
        className={classes.menu}
      >
        <List
          size='small'

          className={classes.list}
        >
          {/* Users */}
          {refs.optionsMention.current?.map((item: any, index: number) => (
            <ListItem
              key={index}

              start={(
                <Avatar
                  color={stringToColor(item.name)}

                  size='small'
                >
                  {item.name?.slice(0, 1)}
                </Avatar>
              )}

              primary={(
                <Type
                  version='l3'
                >
                  {item.name}
                </Type>
              )}

              onClick={() => addTag(item)}

              button
            />
          ))}
        </List>
      </Line>
  ), []);

  const paste = async () => {
    const valueClipboard = await navigator.clipboard.read();

    if (valueClipboard) {
      let values: any = '';

      for (const item of Array.from(valueClipboard)) {
        const valueItem = await item.getType('text/html');

        values += await valueItem.text();
      }

      rootDocument.execCommand('insertHTML', undefined, values);
    }
  };

  const query = (command: string) => {
    return parse(refs.rootDocument.current!.queryCommandValue(command));
  };

  const textQueryUpdate = () => {
    const selected: any = [];

    const updateOptionValues = [
      { name: 'italic', command: 'italic' },
      { name: 'underline', command: 'underline' },
      { name: 'bold', command: 'bold' },
      { name: 'strike-line', command: 'strikeThrough' }
    ];

    updateOptionValues.forEach(item => {
      if (query(item.command)) selected.push(item.name);
    });

    setTextSelected(selected);
  };

  const onMouseUp = React.useCallback(() => {
    if (!refs.edit.current) return;

    const selection_ = refs.rootWindow.current!.getSelection();

    if (!selection_) return;

    if (!selection_.anchorNode || !refs.root.current.contains(selection_.anchorNode)) return setTextSelection(null as any);

    setTimeout(() => {
      const rect = selection_.getRangeAt(0).getBoundingClientRect();

      setTextSelection(Math.round(rect.width) ? { selection: rect, element: selection_.anchorNode?.parentElement } : null as any);

      textQueryUpdate();
    }, 140);
  }, []);

  const onMouseDown = React.useCallback(() => {
    if (!refs.edit.current) return;

    textQueryUpdate();
  }, []);

  const textMethod = React.useCallback((command: string) => (argument: any) => {
    switch (command) {
      // updates
      case 'italic':
        refs.rootDocument.current!.execCommand('italic');

        if (query('italic')) setTextSelected((values: any) => [...values, 'italic']);
        else setTextSelected((values: any) => values.filter((item: any) => item !== 'italic'));

        break;

      case 'underline':
        refs.rootDocument.current!.execCommand('underline');

        if (query('underline')) setTextSelected((values: any) => [...values, 'underline']);
        else setTextSelected((values: any) => values.filter((item: any) => item !== 'underline'));

        break;

      case 'bold':
        refs.rootDocument.current!.execCommand('bold');

        if (query('bold')) setTextSelected((values: any) => [...values, 'bold']);
        else setTextSelected((values: any) => values.filter((item: any) => item !== 'bold'));

        break;

      case 'strike-line':
        refs.rootDocument.current!.execCommand('strikeThrough');

        if (query('strikeThrough')) setTextSelected((values: any) => [...values, 'strike-line']);
        else setTextSelected((values: any) => values.filter((item: any) => item !== 'strike-line'));

        break;

      case 'link-add':
        refs.rootDocument.current!.execCommand('createLink', undefined, argument);

        break;

      case 'link-remove':
        refs.rootDocument.current!.execCommand('unlink');

        break;

      // actions
      case 'copy':
        refs.rootDocument.current!.execCommand('copy');

        break;

      case 'cut':
        refs.rootDocument.current!.execCommand('cut');

        break;

      case 'paste':
        if (refs.rootDocument.current!.queryCommandSupported('paste')) refs.rootDocument.current!.execCommand('paste');
        else paste();

        break;

      case 'delete':
        refs.rootDocument.current!.execCommand('delete');

        break;

      case 'clear':
        refs.rootDocument.current!.execCommand('removeFormat');

        break;

      case 'select-all':
        refs.rootDocument.current!.execCommand('selectAll');

        break;

      case 'undo':
        refs.rootDocument.current!.execCommand('undo');

        break;

      case 'redo':
        refs.rootDocument.current!.execCommand('redo');

        break;

      default:
        break;
    }

    const element = refs.textSelection.current?.element as HTMLElement;

    if (element) {
      let valueElement = element.innerHTML || '';

      if (element.textContent === '') {
        valueElement = '';

        element.innerHTML = '';
      }

      if (valueElement) valueElement = innerHTMLToText(valueElement);
    }
  }, []);

  const AppendProps: any = {
    padding: [14, 14]
  };

  const IconProps: any = {
    size: 'small'
  };

  const TooltipProps: any = {
    position: 'bottom',
    interactive: false
  };

  const ToggleButtonsProps: any = {
    tonal: false,
    color: 'default',
    version: 'text',
    border: false
  };

  const ToggleButtonProps: any = {
    size: 'small'
  };

  const MiniMenuProps: any = {
    tonal: false,
    color: 'default'
  };

  const Input = React.useCallback(React.forwardRef((propsInput: any, ref_: any) => {
    const {
      label: labelInput,

      labelButton,

      value: value__,

      onChange: onChange__,

      onClick,

      InputComponent = TextField,

      InputProps,

      ...other_
    } = propsInput;

    return (
      <Line
        ref={ref_}

        gap={1}

        direction='column'

        Component={Surface}

        {...other_}

        className={classNames([
          other_?.className,
          classes.inputWrapper
        ])}
      >
        <Line
          gap={0.5}

          direction='row'

          align='center'

          style={{
            width: '100%'
          }}
        >
          <InputComponent
            label={labelInput}

            version='outlined'

            size='small'

            valueDefault={value__}

            onChange={onChange__}

            className={classNames([
              classes.textFieldColor
            ])}

            {...InputProps}
          />

          <Button
            color='inherit'

            version='text'

            size='small'

            onClick={onClick}
          >
            {labelButton}
          </Button>
        </Line>
      </Line>
    );
  }), []);

  const WrapperAppend = React.useCallback((propsWrapper: any) => {
    const {
      open: open_,

      element,

      anchorElement,

      onClose,

      children: childrenWrapperAppend,

      ...other_
    } = propsWrapper;

    return (
      <Append
        open={open_}

        element={(
          <div
            className={classes.textMiniMenuAdditionaMenu}
          >
            <Fade
              in={open_}

              add
            >
              {React.cloneElement(element)}
            </Fade>
          </div>
        )}

        anchorElement={anchorElement}

        portal

        alignment='center'

        position='bottom'

        {...AppendProps}
      >
        {React.cloneElement(childrenWrapperAppend, {
          ...other_,

          ...childrenWrapperAppend.props
        })}
      </Append>
    );
  }, []);

  const WrapperToggleButton = React.useCallback(React.forwardRef((propsWrapperToggleButton: any, ref_: any) => {
    const {
      open: open_,

      label: labelWrapperToogleButton,

      children: childrenWrapperToggleButton,

      ...other_
    } = propsWrapperToggleButton;

    return (
      <Tooltip
        open={open_ !== undefined ? open_ : undefined}

        label={labelWrapperToogleButton}

        {...TooltipProps}
      >
        {React.cloneElement(childrenWrapperToggleButton, {
          ...other_,

          ...childrenWrapperToggleButton.props
        })}
      </Tooltip>
    );
  }), []);

  const updateElements = {
    'italic': (
      <WrapperToggleButton
        label='Italic'
      >
        <ToggleButton
          {...ToggleButtonProps}

          selected={refs.textSelected.current.includes('italic')}

          onClick={textMethod('italic')}
        >
          <IconMaterialFormatItalicRounded {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    ),
    'underline': (
      <WrapperToggleButton
        label='Underline'
      >
        <ToggleButton
          {...ToggleButtonProps}

          selected={refs.textSelected.current.includes('underline')}

          onClick={textMethod('underline')}
        >
          <IconMaterialFormatUnderlinedRounded {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    ),
    'bold': (
      <WrapperToggleButton
        label='Bold'

        onClick={textMethod('bold')}
      >
        <ToggleButton
          {...ToggleButtonProps}

          selected={refs.textSelected.current.includes('bold')}
        >
          <IconMaterialFormatBoldRounded {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    ),
    'strike-line': (
      <WrapperToggleButton
        label='Strike Line'

        onClick={textMethod('strike-line')}
      >
        <ToggleButton
          {...ToggleButtonProps}

          selected={refs.textSelected.current.includes('strike-line')}
        >
          <IconMaterialStrikethroughSRounded {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    ),

    'link-add': (
      <WrapperAppend
        open={refs.open.current.linkMiniMenu}

        anchorElement={refs.miniMenuElements.linkAdd}

        element={(
          <ClickListener
            onClickOutside={() => updateOpen('linkMiniMenu', false)}

            include={[refs.miniMenuElements.linkAdd as any]}
          >
            <Input
              ref={refs.miniMenuElements.linkAddInput}

              label='Link'

              labelButton='Add'

              value={refs.inputValues.current.link}

              onChange={(valueNew: any) => updateInputValues('link', valueNew)}

              onClick={() => {
                if (refs.range.current) {
                  const selection_ = refs.rootWindow.current!.getSelection();

                  if (!selection_) return;

                  selection_.removeAllRanges();
                  selection_.addRange(refs.range.current);
                }

                textMethod('link-add')(refs.inputValues.current.link);

                updateOpen('linkMiniMenu', false);

                updateInputValues('link', '');
              }}
            />
          </ClickListener>
        )}
      >
        <WrapperToggleButton
          label='Insert Link'

          open={refs.open.current.linkMiniMenu ? false : undefined}
        >
          <ToggleButton
            ref={refs.miniMenuElements.linkAdd}

            {...ToggleButtonProps}

            selected={refs.open.current.linkMiniMenu}

            onClick={() => updateOpen('linkMiniMenu', !refs.open.current.linkMiniMenu)}
          >
            <IconMaterialAddLinkRounded {...IconProps} />
          </ToggleButton>
        </WrapperToggleButton>
      </WrapperAppend>
    ),
    'link-remove': (
      <WrapperToggleButton
        label='Remove Link'
      >
        <ToggleButton
          {...ToggleButtonProps}

          onClick={textMethod('link-remove')}
        >
          <IconMaterialLinkOffRounded {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    )
  };

  const actionElements = {
    'clear': (
      <WrapperToggleButton
        label='Clear'
      >
        <ToggleButton
          {...ToggleButtonProps}

          onClick={textMethod('clear')}
        >
          <IconMaterialFormatClearRounded {...IconProps} />
        </ToggleButton>
      </WrapperToggleButton>
    )
  };

  const miniMenu = React.useMemo(() => {

    return (
      <Append
        open={!!textSelection}

        element={
          (body: any) => {
            const {
              ref: ref_,
              values,
              style: styleAppend
            } = body;

            return (
              <div
                ref={item => {
                  if (ref_) {
                    if (is('function', ref_)) ref_(item);
                    else ref_.current = item;

                    refs.miniMenu.current = item;
                  }
                }}

                style={{
                  ...((values?.x === 0 && values?.y === 0) ? {
                    visibility: 'hidden'
                  } : undefined),

                  ...styleAppend,

                  zIndex: 1500
                }}

                className={classes.textMiniMenuWrapper}
              >
                <Fade
                  in={!!textSelection}

                  add
                >
                  <ClickListener
                    onClickOutside={() => {
                      setTextSelection(null as any);
                    }}

                    include={[refs.miniMenu, refs.miniMenu.current, refs.miniMenuElements.linkAddInput, refs.miniMenuElements.linkAddInput.current]}
                  >
                    <Line
                      gap={2}

                      direction='row'

                      align='center'

                      justify='flex-start'

                      role='toolbar'

                      aria-label='Mini menu'

                      Component={Surface}

                      {...MiniMenuProps}

                      className={classNames([
                        classes.textMiniMenu
                      ])}
                    >
                      <ToggleButtons
                        {...ToggleButtonsProps}
                      >
                        {updateElements['italic']}

                        {updateElements['underline']}

                        {updateElements['bold']}

                        {updateElements['strike-line']}
                      </ToggleButtons>

                      <ToggleButtons
                        {...ToggleButtonsProps}
                      >
                        {updateElements['link-add']}

                        {updateElements['link-remove']}
                      </ToggleButtons>

                      <ToggleButtons
                        {...ToggleButtonsProps}
                      >
                        {actionElements['clear']}
                      </ToggleButtons>
                    </Line>
                  </ClickListener>
                </Fade>
              </div>
            );
          }
        }

        parent={refs.root.current}

        anchor={textSelection?.selection}

        portal

        alignment='center'

        position='bottom'

        clearOnClose

        {...AppendProps}
      />
    );
  }, [open, textSelection, textSelected]);

  const menu = React.useMemo(() => {
    return (
      <Menu
        open={openMenu}

        position='top'

        alignment='start'

        offset={offset}

        anchor={selectionMenu}

        onClose={onCloseSearch}

        label={label()}

        interactive
      />
    );
  }, [openMenu, selectionMenu, label]);

  let main = (
    <TextField
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      version='text'

      minRows={12}

      multiline

      enabled

      fullWidth

      onInput={onInput}

      onKeyDown={onKeyDown}

      onFocus={onFocus}

      onBlur={onBlur}

      readOnly={readOnly}

      inputProps={{
        version: 'b2',

        contentEditable: true,

        spellCheck: false,

        onPaste,

        onDrop,

        onMouseUp,

        onMouseDown,

        'data-placeholder': placeholder,

        ...inputProps,

        ref: (item: any) => {
          refs.input.current = item;

          if (inputProps?.ref) {
            if (is('function', inputProps.ref)) inputProps.ref(item);
            else inputProps.ref.current = item;
          }
        }
      }}

      InputComponent={Type}

      className={classNames([
        staticClassName('SmartTextField', theme) && [
          'amaui-SmartTextField-root',
          `amaui-SmartTextField-version-${version}`,
        ],

        className,
        classes.root
      ])}

      {...additional as any}

      {...other as any}
    />
  );

  if (version === 'type') main = (
    <Type
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        if (inputProps?.ref) {
          if (is('function', inputProps.ref)) inputProps.ref(item);
          else inputProps.ref.current = item;
        }

        refs.root.current = item;
        refs.input.current = item;
      }}

      onInput={onInput}

      onKeyDown={onKeyDown}

      onFocus={onFocus}

      onBlur={onBlur}

      onPaste={onPaste}

      onDrop={onDrop}

      onMouseUp={onMouseUp}

      onMouseDown={onMouseDown}

      spellCheck={false}

      data-placeholder={placeholder}

      {...inputProps}

      contentEditable={!readOnly}

      className={classNames([
        staticClassName('SmartTextField', theme) && [
          'amaui-SmartTextField-root',
          `amaui-SmartTextField-version-${version}`,
        ],

        className,
        classes.root_type,
        !multiline && classes.singleLine
      ])}

      {...additional as any}

      {...other as any}
    />
  );

  return <>
    {main}

    {/* text edit menu */}
    {miniMenu}

    {/* @ menu */}
    {menu}
  </>;
});

SmartTextField.displayName = 'amaui-SmartTextField';

export default SmartTextField;
