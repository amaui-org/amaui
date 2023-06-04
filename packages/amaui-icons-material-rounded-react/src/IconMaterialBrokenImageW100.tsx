import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrokenImageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageW100'

      short_name='BrokenImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm.2-6.2 3.475-3.475q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175L14 13.5l3.475-3.475q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175L19 10.5V5.8q0-.35-.225-.575Q18.55 5 18.2 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v6.7Zm-1 4.7q0 .35.225.575Q5.45 19 5.8 19h12.4q.35 0 .575-.225Q19 18.55 19 18.2v-6.7l-1-1-3.475 3.475q-.125.125-.25.175-.125.05-.275.05-.15 0-.275-.05-.125-.05-.25-.175L10 10.5l-3.475 3.475q-.125.125-.25.175-.125.05-.275.05-.15 0-.275-.05-.125-.05-.25-.175L5 13.5Zm0 0V19v-7.5.7V5v8.5Z"/>
    </Icon>
  );
});

IconMaterialBrokenImageW100.displayName = 'AmauiIconMaterialBrokenImageW100';

export default IconMaterialBrokenImageW100;
