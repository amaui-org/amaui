import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVisibilityOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityOffW100Filled'

      short_name='VisibilityOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.35 15.55-3.1-3.1q.075-.15.113-.4.037-.25.037-.55 0-1.425-.987-2.413Q13.425 8.1 12 8.1q-.3 0-.525.037-.225.038-.425.113l-2.4-2.4q.825-.3 1.675-.425Q11.175 5.3 12 5.3q2.95 0 5.5 1.575t3.875 4.175q.05.1.075.212.025.113.025.238 0 .125-.025.238-.025.112-.075.212-.525 1-1.287 1.913-.763.912-1.738 1.687Zm1.1 4.9L15.9 16.9q-.6.3-1.612.55-1.013.25-2.288.25-3 0-5.513-1.575-2.512-1.575-3.862-4.175-.05-.1-.075-.212-.025-.113-.025-.238 0-.125.025-.238.025-.112.075-.212.625-1.2 1.55-2.225Q5.1 7.8 6.1 7.1L3.55 4.55q-.1-.1-.112-.238-.013-.137.112-.262t.25-.125q.125 0 .25.125l15.9 15.9q.1.1.112.238.013.137-.112.262t-.25.125q-.125 0-.25-.125ZM12 14.9q.375 0 .85-.1t.7-.25l-4.6-4.6q-.15.275-.25.738-.1.462-.1.812 0 1.425.988 2.412.987.988 2.412.988Zm2.65-3.05-3-3q1.25-.225 2.237.712.988.938.763 2.288Z"/>
    </Icon>
  );
});

IconMaterialVisibilityOffW100Filled.displayName = 'AmauiIconMaterialVisibilityOffW100Filled';

export default IconMaterialVisibilityOffW100Filled;
