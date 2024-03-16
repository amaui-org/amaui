import React from 'react';
import { useNavigate } from 'react-router-dom';

import { is, isEnvironment } from '@amaui/utils';
import { style as styleMethod, classNames, useAmauiTheme } from '@amaui/style-react';

import Icon from '../Icon';
import IconButton from '../IconButton';
import Line from '../Line';
import Tooltip from '../Tooltip';
import Type from '../Type';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IElement, IElementReference } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    height: '100%',
    maxWidth: '1024px',
    padding: '24px',

    '& .amaui-overflow-y': {
      height: '0px',
      flex: '1 1 auto',
      overflowX: 'hidden',
      overflowY: 'auto'
    }
  },

  name: {
    maxWidth: '440px'
  }
}), { name: 'amaui-Page' });

export interface IPageForward {
  to?: string;
  name?: string;
  label?: string;
}

export interface IPage extends ILine {
  back?: IPageForward;
  forward?: IPageForward;

  noHeader?: boolean;

  name?: string | IElement;

  IconBack?: IElementReference;
  IconForward?: IElementReference;
}

const IconMaterialArrowBackRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackRounded'
      short_name='ArrowBack'

      {...props}
    >
      <path d="M10.875 19.3 4.275 12.7Q4.125 12.55 4.062 12.375Q4 12.2 4 12Q4 11.8 4.062 11.625Q4.125 11.45 4.275 11.3L10.875 4.7Q11.15 4.425 11.562 4.412Q11.975 4.4 12.275 4.7Q12.575 4.975 12.588 5.387Q12.6 5.8 12.3 6.1L7.4 11H18.575Q19 11 19.288 11.287Q19.575 11.575 19.575 12Q19.575 12.425 19.288 12.712Q19 13 18.575 13H7.4L12.3 17.9Q12.575 18.175 12.588 18.6Q12.6 19.025 12.3 19.3Q12.025 19.6 11.6 19.6Q11.175 19.6 10.875 19.3Z" />
    </Icon>
  );
});

const IconMaterialArrowForwardRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowForwardRounded'
      short_name='ArrowForward'

      {...props}
    >
      <path d="M11.3 19.3Q11.025 19.025 11.012 18.6Q11 18.175 11.275 17.9L16.175 13H5Q4.575 13 4.287 12.712Q4 12.425 4 12Q4 11.575 4.287 11.287Q4.575 11 5 11H16.175L11.275 6.1Q11 5.825 11.012 5.4Q11.025 4.975 11.3 4.7Q11.575 4.425 12 4.425Q12.425 4.425 12.7 4.7L19.3 11.3Q19.45 11.425 19.513 11.612Q19.575 11.8 19.575 12Q19.575 12.2 19.513 12.375Q19.45 12.55 19.3 12.7L12.7 19.3Q12.425 19.575 12 19.575Q11.575 19.575 11.3 19.3Z" />
    </Icon>
  );
});

const Page: React.FC<IPage> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiPage?.props?.default, ...props_ }), [props_]);

  const {
    back,
    forward,

    noHeader,

    name,

    IconBack = IconMaterialArrowBackRounded,
    IconForward = IconMaterialArrowForwardRounded,

    Component = Line,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  const navigate = isEnvironment('browser') && useNavigate();

  const IconButtonProps = {
    color: 'inherit'
  };

  const navigation = (back || forward) && (
    <Line
      direction='row'

      align='center'

      justify='space-between'

      fullWidth
    >
      {back ? (
        <Tooltip
          name={(back?.name !== undefined ? back.name : back?.label) || 'Back'}
        >
          <IconButton
            onClick={() => navigate(back?.to)}

            {...IconButtonProps}
          >
            <IconBack />
          </IconButton>
        </Tooltip>
      ) : <span />}

      {forward ? (
        <Tooltip
          name={(forward?.name !== undefined ? forward.name : forward?.label) || 'Forward'}
        >
          <IconButton
            onClick={() => navigate(forward?.to)}

            {...IconButtonProps}
          >
            <IconForward />
          </IconButton>
        </Tooltip>
      ) : <span />}
    </Line>
  );

  const header = !noHeader && (navigation || name) && (
    <Line
      gap={2}

      direction='column'

      fullWidth
    >
      {navigation}

      <Line
        gap={0}

        direction='row'

        align='center'

        justify='center'

        fullWidth
      >
        {is('string', name) ? (
          <Type
            version='t1'

            color='inherit'

            align='center'

            className={classes.name}
          >
            {name}
          </Type>
        ) : name}
      </Line>
    </Line>
  );

  return (
    <Component
      ref={ref}

      gap={4}

      direction='column'

      justify='unset'

      align='unset'

      fullWidth

      flex

      className={classNames([
        staticClassName('Page', theme) && [
          'amaui-Page-root'
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {header}

      <Line
        gap={0}

        direction='column'

        justify='unset'

        align='unset'

        fullWidth

        flex
      >
        {children}
      </Line>
    </Component>
  );
});

Page.displayName = 'amaui-Page';

export default Page;
