import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrokenImageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageW100Filled'

      short_name='BrokenImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 11.8v-6q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v5.4l-1.175-1.175q-.125-.125-.25-.175Q18.15 9.8 18 9.8q-.15 0-.275.05-.125.05-.25.175L14 13.5l-3.475-3.475q-.125-.125-.25-.175Q10.15 9.8 10 9.8q-.15 0-.275.05-.125.05-.25.175L6 13.5Zm1.5 7.9q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2v-5.4l1.175 1.175q.125.125.25.175.125.05.275.05.15 0 .275-.05.125-.05.25-.175L10 10.5l3.475 3.475q.125.125.25.175.125.05.275.05.15 0 .275-.05.125-.05.25-.175L18 10.5l1.7 1.7v6q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialBrokenImageW100Filled.displayName = 'AmauiIconMaterialBrokenImageW100Filled';

export default IconMaterialBrokenImageW100Filled;
