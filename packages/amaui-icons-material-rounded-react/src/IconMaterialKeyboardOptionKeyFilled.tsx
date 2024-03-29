import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardOptionKeyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardOptionKeyFilled'

      short_name='KeyboardOptionKey'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 7q-.425 0-.712-.287Q15 6.425 15 6t.288-.713Q15.575 5 16 5h4q.425 0 .712.287Q21 5.575 21 6t-.288.713Q20.425 7 20 7Zm-.075 12q-.55 0-1-.262-.45-.263-.725-.738L7.85 7H4q-.425 0-.712-.287Q3 6.425 3 6t.288-.713Q3.575 5 4 5h3.85q.55 0 1 .262.45.263.725.738l6.35 11H20q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 19 20 19Z"/>
    </Icon>
  );
});

IconMaterialKeyboardOptionKeyFilled.displayName = 'AmauiIconMaterialKeyboardOptionKeyFilled';

export default IconMaterialKeyboardOptionKeyFilled;
