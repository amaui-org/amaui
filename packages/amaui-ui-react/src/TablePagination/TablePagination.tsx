import React from 'react';

import { clamp, is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import LineElement from '../Line';
import TypeElement from '../Type';
import Select from '../Select';
import ListItemElement from '../ListItem';
import IconElement from '../Icon';
import IconButtonElement from '../IconButton';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IColor, IElementReference, ISize, ITonal, IVersion } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  select: {
    minWidth: '140px'
  },

  text: {
    flex: '0 0 auto'
  }
}), { name: 'amaui-TablePagination' });

const IconMaterialLastPageRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LastPageRounded'
      short_name='LastPage'

      {...props}
    >
      <path d="M6.3 17.3Q6.025 17.025 6.025 16.6Q6.025 16.175 6.3 15.9L10.2 12L6.3 8.1Q6.025 7.825 6.025 7.4Q6.025 6.975 6.3 6.7Q6.575 6.425 7 6.425Q7.425 6.425 7.7 6.7L12.3 11.3Q12.45 11.45 12.513 11.625Q12.575 11.8 12.575 12Q12.575 12.2 12.513 12.375Q12.45 12.55 12.3 12.7L7.7 17.3Q7.425 17.575 7 17.575Q6.575 17.575 6.3 17.3ZM17 18Q16.575 18 16.288 17.712Q16 17.425 16 17V7Q16 6.575 16.288 6.287Q16.575 6 17 6Q17.425 6 17.712 6.287Q18 6.575 18 7V17Q18 17.425 17.712 17.712Q17.425 18 17 18Z" />
    </Icon>
  );
});

const IconMaterialFirstPageRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FirstPageRounded'
      short_name='FirstPage'

      {...props}
    >
      <path d="M16.3 17.3 11.7 12.7Q11.55 12.55 11.488 12.375Q11.425 12.2 11.425 12Q11.425 11.8 11.488 11.625Q11.55 11.45 11.7 11.3L16.3 6.7Q16.575 6.425 17 6.425Q17.425 6.425 17.7 6.7Q17.975 6.975 17.975 7.4Q17.975 7.825 17.7 8.1L13.8 12L17.7 15.9Q17.975 16.175 17.975 16.6Q17.975 17.025 17.7 17.3Q17.425 17.575 17 17.575Q16.575 17.575 16.3 17.3ZM7 18Q6.575 18 6.287 17.712Q6 17.425 6 17V7Q6 6.575 6.287 6.287Q6.575 6 7 6Q7.425 6 7.713 6.287Q8 6.575 8 7V17Q8 17.425 7.713 17.712Q7.425 18 7 18Z" />
    </Icon>
  );
});

const IconMaterialNavigateNextRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateNextRounded'
      short_name='NavigateNext'

      {...props}
    >
      <path d="M8.7 17.3Q8.425 17.025 8.425 16.6Q8.425 16.175 8.7 15.9L12.6 12L8.7 8.1Q8.425 7.825 8.425 7.4Q8.425 6.975 8.7 6.7Q8.975 6.425 9.4 6.425Q9.825 6.425 10.1 6.7L14.7 11.3Q14.85 11.45 14.913 11.625Q14.975 11.8 14.975 12Q14.975 12.2 14.913 12.375Q14.85 12.55 14.7 12.7L10.1 17.3Q9.825 17.575 9.4 17.575Q8.975 17.575 8.7 17.3Z" />
    </Icon>
  );
});

const IconMaterialNavigateBeforeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateBeforeRounded'
      short_name='NavigateBefore'

      {...props}
    >
      <path d="M13.3 17.3 8.7 12.7Q8.55 12.55 8.488 12.375Q8.425 12.2 8.425 12Q8.425 11.8 8.488 11.625Q8.55 11.45 8.7 11.3L13.3 6.7Q13.575 6.425 14 6.425Q14.425 6.425 14.7 6.7Q14.975 6.975 14.975 7.4Q14.975 7.825 14.7 8.1L10.8 12L14.7 15.9Q14.975 16.175 14.975 16.6Q14.975 17.025 14.7 17.3Q14.425 17.575 14 17.575Q13.575 17.575 13.3 17.3Z" />
    </Icon>
  );
});

export interface ITableRow extends ILine {
  tonal?: ITonal;
  color?: IColor;
  version?: IVersion;
  elevation?: boolean;
  size?: ISize;

  page?: number;
  pageDefault?: number;

  onChange?: (value: number) => any;

  rowsPerPage?: number;
  rowsPerPageDefault?: number;
  rowsPerPageOptions?: Array<number>;
  rowsPerPageText?: string;

  onRowsPerPageChange?: (value: number) => any;

  total?: number;
  first?: boolean;
  before?: boolean;
  next?: boolean;
  last?: boolean;

  IconFirst?: IElementReference;
  IconBefore?: IElementReference;
  IconNext?: IElementReference;
  IconLast?: IElementReference;
}

const TablePagination: React.FC<ITableRow> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTablePagination?.props?.default, ...props_ }), [props_]);

  const {
    tonal = false,
    color = 'default',
    version = 'text',
    elevation = false,
    size = 'regular',

    page: page_ = 0,
    pageDefault,
    onChange,

    rowsPerPage: rowsPerPage_ = props.total < 4 ? props.total : props.total * 0.05,
    rowsPerPageDefault,
    rowsPerPageOptions = props.total < 4 ? [props.total] : [props.total * 0.05, props.total * 0.1, props.total * 0.25, props.total * 0.5, props.total],
    rowsPerPageText = 'Rows per page',
    onRowsPerPageChange,

    total,
    first = false,
    before = true,
    next = true,
    last = false,

    IconFirst = IconMaterialFirstPageRounded,
    IconBefore = IconMaterialNavigateBeforeRounded,
    IconNext = IconMaterialNavigateNextRounded,
    IconLast = IconMaterialLastPageRounded,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [page, setPage] = React.useState(pageDefault !== undefined ? pageDefault : page_);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageDefault !== undefined ? rowsPerPageDefault : rowsPerPage_);

  React.useEffect(() => {
    if (rowsPerPage_ !== rowsPerPage) setRowsPerPage(rowsPerPage_);
  }, [rowsPerPage_]);

  const onUpdateRowsPerPage = (value: number) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('rowsPerPage')) setRowsPerPage(value);

    if (is('function', onRowsPerPageChange)) onRowsPerPageChange(value);

    update(0);
  };

  const update = (value: number) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('page')) setPage(value);

    if (is('function', onChange)) onChange(value);
  };

  const maxPage = Math.ceil(total / rowsPerPage) - 1;

  const IconButtonProps = {
    tonal,
    color,
    version,
    elevation,
    size
  };

  return (
    <Line
      ref={ref}

      gap={3}

      direction='row'

      justify='flex-start'

      align='center'

      Component={Component}

      className={classNames([
        staticClassName('TablePagination', theme) && [
          `amaui-TablePagination-root`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      <Line
        gap={1}

        direction='row'

        justify='flex-start'

        align='center'
      >
        <Select
          tonal={tonal}

          color={color}

          label={rowsPerPageText}

          size='small'

          value={rowsPerPage}

          onChange={onUpdateRowsPerPage}

          className={classNames([
            staticClassName('TablePagination', theme) && [
              `amaui-TablePagination-select`
            ],

            classes.select
          ])}
        >
          {rowsPerPageOptions.map(item => (
            <ListItem
              key={item}

              primary={item}

              value={item}

              button
            />
          ))}
        </Select>
      </Line>

      <Type
        version='b2'

        gap={1}

        direction='row'

        justify='flex-start'

        align='center'

        Component={Line}

        className={classNames([
          staticClassName('TablePagination', theme) && [
            `amaui-TablePagination-text`
          ],

          classes.text
        ])}
      >
        <span>{(page * rowsPerPage) + 1} - {((page + 1) * rowsPerPage) || total}</span> <span>of</span> <span>{total}</span>
      </Type>

      <Line
        gap={1}

        direction='row'

        justify='flex-start'

        align='center'
      >
        {first && (
          <IconButton
            onClick={() => update(0)}

            disabled={page === 0}

            {...IconButtonProps}
          >
            <IconFirst />
          </IconButton>
        )}

        {before && (
          <IconButton
            onClick={() => update(clamp(page - 1, 0, maxPage))}

            disabled={page === 0}

            {...IconButtonProps}
          >
            <IconBefore />
          </IconButton>
        )}

        {next && (
          <IconButton
            onClick={() => update(clamp(page + 1, 0, maxPage))}

            disabled={page === maxPage}

            {...IconButtonProps}
          >
            <IconNext />
          </IconButton>
        )}

        {last && (
          <IconButton
            onClick={() => update(maxPage)}

            disabled={page === maxPage}

            {...IconButtonProps}
          >
            <IconLast />
          </IconButton>
        )}
      </Line>
    </Line>
  );
});

TablePagination.displayName = 'amaui-TablePagination';

export default TablePagination;
