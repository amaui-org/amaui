import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextIncrease = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextIncrease'

      short_name='TextIncrease'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.65 19q-.675 0-1-.45-.325-.45-.075-1.1l4.25-11.3q.2-.475.688-.812Q7 5 7.525 5q.5 0 .975.338.475.337.675.812L13.4 17.425q.25.65-.062 1.113Q13.025 19 12.3 19q-.275 0-.55-.188-.275-.187-.375-.462l-1.05-2.925h-5.65l-1.025 2.9q-.1.275-.387.475-.288.2-.613.2Zm2.75-5.6h4.2L7.55 7.6h-.1ZM19 16q-.425 0-.712-.288Q18 15.425 18 15v-2h-2q-.425 0-.712-.288Q15 12.425 15 12t.288-.713Q15.575 11 16 11h2V9q0-.425.288-.713Q18.575 8 19 8t.712.287Q20 8.575 20 9v2h2q.425 0 .712.287.288.288.288.713t-.288.712Q22.425 13 22 13h-2v2q0 .425-.288.712Q19.425 16 19 16Z"/>
    </Icon>
  );
});

IconMaterialTextIncrease.displayName = 'AmauiIconMaterialTextIncrease';

export default IconMaterialTextIncrease;
