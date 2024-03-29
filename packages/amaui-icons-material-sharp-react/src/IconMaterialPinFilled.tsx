import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPinFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinFilled'

      short_name='Pin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16Zm4.5-5h1.15V9h-.9L5 10.25l.6.9.9-.65Zm3.1 0h3.9v-1h-2.35l-.05-.05q.525-.5.863-.85.337-.35.537-.55.45-.45.675-.9.225-.45.225-.95 0-.725-.55-1.212Q12.3 9 11.45 9q-.65 0-1.175.375t-.725.975l1 .4q.125-.325.363-.513.237-.187.537-.187.375 0 .612.2.238.2.238.5 0 .275-.1.512-.1.238-.45.588l-.8.8L9.6 14Zm7.4 0q.9 0 1.45-.5.55-.5.55-1.3 0-.45-.25-.8-.25-.35-.7-.55v-.05q.35-.2.55-.513.2-.312.2-.737 0-.675-.525-1.112Q17.75 9 16.95 9q-.625 0-1.163.363-.537.362-.687.887l1 .4q.1-.3.325-.475T16.95 10q.325 0 .538.188.212.187.212.462 0 .35-.25.55-.25.2-.65.2h-.45v1h.5q.5 0 .775.2t.275.55q0 .325-.275.562-.275.238-.625.238-.425 0-.65-.188-.225-.187-.4-.662l-1 .4q.175.725.712 1.113Q16.2 15 17 15Z"/>
    </Icon>
  );
});

IconMaterialPinFilled.displayName = 'AmauiIconMaterialPinFilled';

export default IconMaterialPinFilled;
