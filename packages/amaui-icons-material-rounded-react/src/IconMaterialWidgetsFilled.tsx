import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWidgetsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidgetsFilled'

      short_name='Widgets'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.65 12.575q-.2 0-.375-.063-.175-.062-.325-.212L11.7 8.05q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l4.25-4.25q.15-.15.325-.212.175-.063.375-.063t.375.063q.175.062.325.212l4.25 4.25q.15.15.212.325.063.175.063.375t-.063.375q-.062.175-.212.325l-4.25 4.25q-.15.15-.325.212-.175.063-.375.063ZM4 11q-.425 0-.712-.288Q3 10.425 3 10V4q0-.425.288-.713Q3.575 3 4 3h6q.425 0 .713.287Q11 3.575 11 4v6q0 .425-.287.712Q10.425 11 10 11Zm10 10q-.425 0-.712-.288Q13 20.425 13 20v-6q0-.425.288-.713Q13.575 13 14 13h6q.425 0 .712.287.288.288.288.713v6q0 .425-.288.712Q20.425 21 20 21ZM4 21q-.425 0-.712-.288Q3 20.425 3 20v-6q0-.425.288-.713Q3.575 13 4 13h6q.425 0 .713.287.287.288.287.713v6q0 .425-.287.712Q10.425 21 10 21Z"/>
    </Icon>
  );
});

IconMaterialWidgetsFilled.displayName = 'AmauiIconMaterialWidgetsFilled';

export default IconMaterialWidgetsFilled;
