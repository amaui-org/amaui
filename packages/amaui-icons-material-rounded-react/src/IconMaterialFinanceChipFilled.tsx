import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFinanceChipFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FinanceChipFilled'

      short_name='FinanceChip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.75 16h.725v-.8q.7-.1 1.188-.575.487-.475.487-1.225 0-.65-.5-1.088-.5-.437-1.15-.712V9.75q.25.075.413.25.162.175.237.425l.9-.375q-.175-.525-.6-.838-.425-.312-.95-.412V8h-.75v.775q-.7.075-1.188.512-.487.438-.487 1.163 0 .675.513 1.125.512.45 1.162.725v1.975q-.4-.125-.675-.425t-.375-.7l-.875.375q.2.7.7 1.15.5.45 1.225.55Zm.75-1.75V12.6q.275.125.488.3.212.175.212.525 0 .4-.2.562-.2.163-.5.263Zm-.75-2.975q-.275-.125-.5-.3-.225-.175-.225-.525 0-.35.225-.512.225-.163.5-.213ZM8 19q-2.925 0-4.962-2.038Q1 14.925 1 12t2.038-4.963Q5.075 5 8 5h8q2.925 0 4.962 2.037Q23 9.075 23 12q0 2.925-2.038 4.962Q18.925 19 16 19Z"/>
    </Icon>
  );
});

IconMaterialFinanceChipFilled.displayName = 'AmauiIconMaterialFinanceChipFilled';

export default IconMaterialFinanceChipFilled;
