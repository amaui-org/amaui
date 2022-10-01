import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import Tooltip from '../Tooltip';
import ToggleButtons from '../ToggleButtons';
import ToggleButton from '../ToggleButton';
import Surface from '../Surface';
import Divider from '../Divider';
import Line from '../Line';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    width: '100%'
  },

  value: {
    padding: '16px',
    whiteSpace: 'break-spaces'
  },

  toolbars: {
    width: '100%'
  },

  toolbar: {
    width: '100%',
    overflowX: 'auto',
    padding: '8px'
  },

  divider: {
    '&.AmauiDivider-root': {
      margin: 0
    }
  },

  divider_middle: {
    '&.AmauiDivider-root': {
      opacity: theme.palette.light ? 0.06 : 0.12
    }
  },

  divider_end: {
    '&.AmauiDivider-root': {
      opacity: theme.palette.light ? 0.14 : 0.24
    }
  }
}), { name: 'AmauiRichTextEditor' });

const IconMaterialFormatItalicRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatItalicRounded'
      short_name='FormatItalic'

      {...props}
    >
      <path d="M6.5 20Q5.875 20 5.438 19.562Q5 19.125 5 18.5Q5 17.875 5.438 17.438Q5.875 17 6.5 17H8.375L12.375 7H10.5Q9.875 7 9.438 6.562Q9 6.125 9 5.5Q9 4.875 9.438 4.438Q9.875 4 10.5 4H17.5Q18.125 4 18.562 4.438Q19 4.875 19 5.5Q19 6.125 18.562 6.562Q18.125 7 17.5 7H15.625L11.625 17H13.5Q14.125 17 14.562 17.438Q15 17.875 15 18.5Q15 19.125 14.562 19.562Q14.125 20 13.5 20Z" />
    </Icon>
  );
});

const IconMaterialFormatUnderlinedRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatUnderlinedRounded'
      short_name='FormatUnderlined'

      {...props}
    >
      <path d="M12 17Q9.475 17 7.737 15.262Q6 13.525 6 11V4.25Q6 3.725 6.363 3.362Q6.725 3 7.25 3Q7.775 3 8.137 3.362Q8.5 3.725 8.5 4.25V11Q8.5 12.475 9.512 13.488Q10.525 14.5 12 14.5Q13.475 14.5 14.488 13.488Q15.5 12.475 15.5 11V4.25Q15.5 3.725 15.863 3.362Q16.225 3 16.75 3Q17.275 3 17.638 3.362Q18 3.725 18 4.25V11Q18 13.525 16.262 15.262Q14.525 17 12 17ZM6 21Q5.575 21 5.287 20.712Q5 20.425 5 20Q5 19.575 5.287 19.288Q5.575 19 6 19H18Q18.425 19 18.712 19.288Q19 19.575 19 20Q19 20.425 18.712 20.712Q18.425 21 18 21Z" />
    </Icon>
  );
});

const IconMaterialFormatBoldRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatBoldRounded'
      short_name='FormatBold'

      {...props}
    >
      <path d="M9 18Q8.175 18 7.588 17.413Q7 16.825 7 16V6Q7 5.175 7.588 4.588Q8.175 4 9 4H12.5Q14.2 4 15.475 4.975Q16.75 5.95 16.75 7.65Q16.75 8.85 16.2 9.562Q15.65 10.275 14.9 10.65V10.85Q16 11.225 16.625 12.025Q17.25 12.825 17.25 14.1Q17.25 15.975 15.887 16.988Q14.525 18 12.65 18ZM9.65 9.7H12.3Q13.125 9.7 13.663 9.225Q14.2 8.75 14.2 8.025Q14.2 7.3 13.663 6.825Q13.125 6.35 12.3 6.35H9.65ZM9.65 15.6H12.5Q13.475 15.6 14.038 15.1Q14.6 14.6 14.6 13.775Q14.6 12.95 14.038 12.45Q13.475 11.95 12.5 11.95H9.65Z" />
    </Icon>
  );
});

const IconMaterialContentCopyRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopyRounded'
      short_name='ContentCopy'

      {...props}
    >
      <path d="M9 18Q8.175 18 7.588 17.413Q7 16.825 7 16V4Q7 3.175 7.588 2.587Q8.175 2 9 2H18Q18.825 2 19.413 2.587Q20 3.175 20 4V16Q20 16.825 19.413 17.413Q18.825 18 18 18ZM9 16H18Q18 16 18 16Q18 16 18 16V4Q18 4 18 4Q18 4 18 4H9Q9 4 9 4Q9 4 9 4V16Q9 16 9 16Q9 16 9 16ZM5 22Q4.175 22 3.587 21.413Q3 20.825 3 20V7Q3 6.575 3.288 6.287Q3.575 6 4 6Q4.425 6 4.713 6.287Q5 6.575 5 7V20Q5 20 5 20Q5 20 5 20H15Q15.425 20 15.713 20.288Q16 20.575 16 21Q16 21.425 15.713 21.712Q15.425 22 15 22ZM9 4Q9 4 9 4Q9 4 9 4V16Q9 16 9 16Q9 16 9 16Q9 16 9 16Q9 16 9 16V4Q9 4 9 4Q9 4 9 4Z" />
    </Icon>
  );
});

const IconMaterialContentCutRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCutRounded'
      short_name='ContentCut'

      {...props}
    >
      <path d="M19.6 21.6 12 14 9.65 16.35Q9.85 16.725 9.925 17.15Q10 17.575 10 18Q10 19.65 8.825 20.825Q7.65 22 6 22Q4.35 22 3.175 20.825Q2 19.65 2 18Q2 16.35 3.175 15.175Q4.35 14 6 14Q6.425 14 6.85 14.075Q7.275 14.15 7.65 14.35L10 12L7.65 9.65Q7.275 9.85 6.85 9.925Q6.425 10 6 10Q4.35 10 3.175 8.825Q2 7.65 2 6Q2 4.35 3.175 3.175Q4.35 2 6 2Q7.65 2 8.825 3.175Q10 4.35 10 6Q10 6.425 9.925 6.85Q9.85 7.275 9.65 7.65L21.6 19.6Q22.025 20.025 22.025 20.6Q22.025 21.175 21.6 21.6Q21.175 22.025 20.6 22.025Q20.025 22.025 19.6 21.6ZM15 11 13 9 19.6 2.4Q20.025 1.975 20.6 1.975Q21.175 1.975 21.6 2.4Q22.025 2.825 22.025 3.4Q22.025 3.975 21.6 4.4ZM6 8Q6.825 8 7.412 7.412Q8 6.825 8 6Q8 5.175 7.412 4.588Q6.825 4 6 4Q5.175 4 4.588 4.588Q4 5.175 4 6Q4 6.825 4.588 7.412Q5.175 8 6 8ZM12 12.5Q12.225 12.5 12.363 12.363Q12.5 12.225 12.5 12Q12.5 11.775 12.363 11.637Q12.225 11.5 12 11.5Q11.775 11.5 11.637 11.637Q11.5 11.775 11.5 12Q11.5 12.225 11.637 12.363Q11.775 12.5 12 12.5ZM6 20Q6.825 20 7.412 19.413Q8 18.825 8 18Q8 17.175 7.412 16.587Q6.825 16 6 16Q5.175 16 4.588 16.587Q4 17.175 4 18Q4 18.825 4.588 19.413Q5.175 20 6 20Z" />
    </Icon>
  );
});

const IconMaterialContentPasteRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentPasteRounded'
      short_name='ContentPaste'

      {...props}
    >
      <path d="M5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H9.2Q9.525 2.1 10.288 1.55Q11.05 1 12 1Q12.95 1 13.725 1.55Q14.5 2.1 14.8 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5V19Q21 19.825 20.413 20.413Q19.825 21 19 21ZM5 19H19Q19 19 19 19Q19 19 19 19V5Q19 5 19 5Q19 5 19 5H17V6Q17 6.825 16.413 7.412Q15.825 8 15 8H9Q8.175 8 7.588 7.412Q7 6.825 7 6V5H5Q5 5 5 5Q5 5 5 5V19Q5 19 5 19Q5 19 5 19ZM12 5Q12.425 5 12.713 4.712Q13 4.425 13 4Q13 3.575 12.713 3.287Q12.425 3 12 3Q11.575 3 11.288 3.287Q11 3.575 11 4Q11 4.425 11.288 4.712Q11.575 5 12 5Z" />
    </Icon>
  );
});

// to do

// one action method for various use cases

// updates

// actions

// to updates add
// font family, with custom familes if user adds them

// to actions add, save document, print

// keyboard shortcuts same as in wysiwyg

const RichTextEditor = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiRichTextEditor?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'default',
    version = 'filled',

    value,

    render,

    exclude,

    updates = true,
    actions = true,

    IconItalic = IconMaterialFormatItalicRounded,
    IconUnderline = IconMaterialFormatUnderlinedRounded,
    IconBold = IconMaterialFormatBoldRounded,

    IconCopy = IconMaterialContentCopyRounded,
    IconCut = IconMaterialContentCutRounded,
    IconPaste = IconMaterialContentPasteRounded,

    ToolbarProps,
    ToolbarUpdatesProps,
    ToolbarActionsProps,
    ToggleButtonProps: ToggleButtonProps_,
    ToggleButtonsProps: ToggleButtonsProps_,
    DividerProps: DividerProps_,
    TooltipProps_: TooltipProps_,
    IconProps: IconProps_,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const includes = (...args) => !is('array', exclude) || args.some(item => !exclude.includes(item));

  // italic, underline, bold
  // updates toolbar
  const updates_ = updates && (!is('array', exclude) || includes('italic', 'underline', 'bold'));

  // copy, paste, cut
  // action toolbar
  const actions_ = actions && (!is('array', exclude) || includes('copy', 'paste', 'cut'));

  const DividerProps = {
    color: 'inherit',

    ...DividerProps_,
  };
  const TooltipProps = {
    position: 'bottom',
    interaction: false,

    ...TooltipProps_,
  };

  const ToggleButtonsProps = {
    tonal,
    color,
    version: 'text',
    border: false,

    ...ToggleButtonsProps_,
  };

  const ToggleButtonProps = {
    size: 'small',

    ...ToggleButtonProps_,
  };

  const IconProps = {
    size: 'small',

    ...IconProps_
  };

  const WrapperToggleButton = React.useCallback((props: any) => {
    const {
      label,

      children,

      ...other
    } = props;

    return (
      <Tooltip
        label={label}

        {...TooltipProps}
      >
        {React.cloneElement(children, {
          ...other,

          ...children.props
        })}
      </Tooltip>
    );
  }, []);

  return (
    <Line
      ref={ref}

      gap={0}

      Component={Component}

      className={classNames([
        staticClassName('RichTextEditor', theme) && [
          'AmauiRichTextEditor-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {(updates || actions_) && (
        <Line
          tonal={tonal}

          color={color}

          version={version}

          gap={0}

          direction='column'

          align='unset'

          justify='unset'

          Component={Surface}

          {...ToolbarProps}

          className={classNames([
            staticClassName('RichTextEditor', theme) && [
              'AmauiRichTextEditor-toolbars'
            ],

            ToolbarProps?.className,
            classes.toolbars
          ])}
        >
          {updates_ && (
            <Line
              gap={2}

              direction='row'

              align='center'

              justify='flex-start'

              {...ToolbarUpdatesProps}

              className={classNames([
                staticClassName('RichTextEditor', theme) && [
                  'AmauiRichTextEditor-toolbar'
                ],

                ToolbarUpdatesProps?.className,
                classes.toolbar,
                classes.toolbar_updates
              ])}
            >
              {includes('italic', 'underlined', 'bold') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('italic') && (
                    <WrapperToggleButton
                      label='Italic'
                    >
                      {is('function', render) ? render('italic', ToggleButtonProps) : (
                        <ToggleButton
                          {...ToggleButtonProps}
                        >
                          <IconItalic {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}

                  {includes('underline') && (
                    <WrapperToggleButton
                      label='Underline'
                    >
                      {is('function', render) ? render('underline', ToggleButtonProps) : (
                        <ToggleButton
                          {...ToggleButtonProps}
                        >
                          <IconUnderline {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}

                  {includes('bold') && (
                    <WrapperToggleButton
                      label='Bold'
                    >
                      {is('function', render) ? render('bold', ToggleButtonProps) : (
                        <ToggleButton
                          {...ToggleButtonProps}
                        >
                          <IconBold {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}
                </ToggleButtons>
              )}
            </Line>
          )}

          {(updates_ && actions_) && (
            <Divider
              {...DividerProps}

              className={classNames([
                staticClassName('RichTextEditor', theme) && [
                  'AmauiRichTextEditor-divider'
                ],

                DividerProps?.className,
                classes.divider,
                classes.divider_middle
              ])}
            />
          )}

          {actions_ && (
            <Line
              gap={2}

              direction='row'

              align='center'

              justify='flex-start'

              {...ToolbarActionsProps}

              className={classNames([
                staticClassName('RichTextEditor', theme) && [
                  'AmauiRichTextEditor-toolbar'
                ],

                ToolbarActionsProps?.className,
                classes.toolbar,
                classes.toolbar_actions
              ])}
            >
              {includes('italic', 'underlined', 'bold') && (
                <ToggleButtons
                  {...ToggleButtonsProps}
                >
                  {includes('copy') && (
                    <WrapperToggleButton
                      label='Copy'
                    >
                      {is('function', render) ? render('copy', ToggleButtonProps) : (
                        <ToggleButton
                          {...ToggleButtonProps}
                        >
                          <IconCopy {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}

                  {includes('cut') && (
                    <WrapperToggleButton
                      label='Cut'
                    >
                      {is('function', render) ? render('cut', ToggleButtonProps) : (
                        <ToggleButton
                          {...ToggleButtonProps}
                        >
                          <IconCut {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}

                  {includes('paste') && (
                    <WrapperToggleButton
                      label='Paste'
                    >
                      {is('function', render) ? render('paste', ToggleButtonProps) : (
                        <ToggleButton
                          {...ToggleButtonProps}
                        >
                          <IconPaste {...IconProps} />
                        </ToggleButton>
                      )}
                    </WrapperToggleButton>
                  )}
                </ToggleButtons>
              )}
            </Line>
          )}

          <Divider
            {...DividerProps}

            className={classNames([
              staticClassName('RichTextEditor', theme) && [
                'AmauiRichTextEditor-divider'
              ],

              DividerProps?.className,
              classes.divider,
              classes.divider_end
            ])}
          />
        </Line>
      )}

      <Surface
        color='default'

        className={classNames([
          staticClassName('RichTextEditor', theme) && [
            'AmauiRichTextEditor-value'
          ],

          classes.value
        ])}
      >
        {value}
      </Surface>
    </Line>
  );
});

RichTextEditor.displayName = 'AmauiRichTextEditor';

export default RichTextEditor;
