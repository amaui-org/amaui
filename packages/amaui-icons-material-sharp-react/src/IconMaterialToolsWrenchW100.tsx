import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolsWrenchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsWrenchW100'

      short_name='ToolsWrench'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.725 20.05 1.5-1.5-7.4-7.4q.325-.525.5-1.113.175-.587.175-1.237 0-1.875-1.287-3.175-1.288-1.3-3.163-1.3-.325 0-.6.037-.275.038-.55.113L10.825 7.4 9.2 9l-1.625 1.625-2.9-2.9Q4.6 8 4.562 8.262q-.037.263-.037.538 0 1.875 1.3 3.187Q7.125 13.3 9 13.3q.65 0 1.25-.163.6-.162 1.1-.487Zm.075 1.05-7.6-7.6q-.5.25-1.05.375T9.025 14q-2.175 0-3.687-1.512Q3.825 10.975 3.825 8.8q0-.525.163-1.238.162-.712.412-1.087l3.175 3.15L9.85 7.4l-3.2-3.2Q7 4 7.663 3.812 8.325 3.625 9 3.625q2.175 0 3.688 1.5Q14.2 6.625 14.2 8.8q0 .6-.125 1.175-.125.575-.375 1.075l7.575 7.575ZM9.2 9Z"/>
    </Icon>
  );
});

IconMaterialToolsWrenchW100.displayName = 'AmauiIconMaterialToolsWrenchW100';

export default IconMaterialToolsWrenchW100;
