import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoneAllW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneAllW100'

      short_name='DoneAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.7 16.8q-.15 0-.275-.05-.125-.05-.25-.175L2.2 12.6q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l4 4 .9-.9.5.5-.875.875q-.125.125-.25.175-.125.05-.275.05Zm5.65 0q-.15 0-.275-.05-.125-.05-.25-.175L7.85 12.6q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125l4 4 8.95-8.95q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25l-8.925 8.925q-.125.125-.25.175-.125.05-.275.05Zm-.9-4.45-.5-.5 4.7-4.7q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25Z"/>
    </Icon>
  );
});

IconMaterialDoneAllW100.displayName = 'AmauiIconMaterialDoneAllW100';

export default IconMaterialDoneAllW100;
