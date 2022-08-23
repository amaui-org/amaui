import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialModeOffOnSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeOffOnSharpW100'
      short_name='ModeOffOn'

      {...props}
    >
      <path d="M12 12q-.15 0-.25-.1t-.1-.25v-8.2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v8.2q0 .15-.1.25T12 12Zm0 7.7q-1.6 0-3-.6t-2.45-1.65Q5.5 16.4 4.9 15q-.6-1.4-.6-3 0-1.475.55-2.8.55-1.325 1.5-2.375.1-.125.238-.113.137.013.262.138.1.1.075.225-.025.125-.125.25-.875.925-1.337 2.137Q5 10.675 5 12q0 2.925 2.038 4.962Q9.075 19 12 19t4.962-2.038Q19 14.925 19 12q0-1.35-.462-2.538-.463-1.187-1.338-2.137-.1-.125-.125-.263-.025-.137.075-.237.125-.125.263-.125.137 0 .237.125.95 1.05 1.5 2.375t.55 2.8q0 1.6-.6 3t-1.65 2.45Q16.4 18.5 15 19.1q-1.4.6-3 .6Z"/>
    </Icon>
  );
});

IconMaterialModeOffOnSharpW100.displayName = 'AmauiIconMaterialModeOffOnSharpW100';

export default IconMaterialModeOffOnSharpW100;
