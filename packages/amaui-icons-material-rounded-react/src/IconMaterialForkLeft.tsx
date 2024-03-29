import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForkLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForkLeft'

      short_name='ForkLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 21q-.425 0-.712-.288Q13 20.425 13 20v-3q-.45-1.6-1.587-2.363-1.138-.762-2.488-.762-.275 0-.55.037-.275.038-.55.088l.9.9q.275.275.275.687 0 .413-.3.713-.275.275-.7.275-.425 0-.7-.275l-2.6-2.6q-.15-.15-.213-.325-.062-.175-.062-.375t.062-.375q.063-.175.213-.325l2.6-2.6q.275-.275.688-.288Q8.4 9.4 8.7 9.7q.275.275.275.7 0 .425-.275.7l-.875.9q.225-.05.475-.075.25-.025.525-.025 1.1 0 2.2.337 1.1.338 1.975 1.113V6.825l-.9.9q-.3.3-.7.287Q11 8 10.7 7.7q-.275-.3-.287-.7-.013-.4.287-.7l2.6-2.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l2.6 2.6q.275.275.287.687.013.413-.287.713-.275.275-.7.275-.425 0-.7-.275l-.9-.875V20q0 .425-.287.712Q14.425 21 14 21Z"/>
    </Icon>
  );
});

IconMaterialForkLeft.displayName = 'AmauiIconMaterialForkLeft';

export default IconMaterialForkLeft;
