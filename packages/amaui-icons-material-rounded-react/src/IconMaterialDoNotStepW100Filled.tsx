import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoNotStepW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoNotStepW100Filled'

      short_name='DoNotStep'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.8 14.95-.5-.5 3.475-3.475q.225.2.225.487 0 .288-.2.488Zm-1.575-1.55-5.25-5.25 2.4-2.425Q13.8 5.3 14.438 5.3q.637 0 1.062.425l4.2 4.2Zm4.825 8.65-6.725-6.725L11.65 18q-.2.2-.475.312-.275.113-.575.113H4.775q-.625 0-1.062-.437-.438-.438-.438-1.063v-.4q0-.375.2-.65t.55-.425q.7-.325 1.375-.7.675-.375 1.325-.875l.75.75q.125.125.337.113.213-.013.338-.138.125-.125.138-.338.012-.212-.113-.337l-.7-.725.238-.238q.112-.112.262-.237l.7.7q.15.15.338.125.187-.025.337-.175.15-.15.138-.363-.013-.212-.138-.337l-.875-.9q.125-.125.213-.275.087-.15.162-.325l.975.975q.125.125.325.137.2.013.35-.112.125-.125.15-.313.025-.187-.175-.387L2.5 3.5q-.1-.1-.1-.25T2.5 3q.1-.125.25-.113Q2.9 2.9 3 3l18.55 18.55q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialDoNotStepW100Filled.displayName = 'AmauiIconMaterialDoNotStepW100Filled';

export default IconMaterialDoNotStepW100Filled;
