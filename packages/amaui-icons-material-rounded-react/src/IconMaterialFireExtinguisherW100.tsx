import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFireExtinguisherW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireExtinguisherW100'

      short_name='FireExtinguisher'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.75 20.05q-.575 0-.962-.387-.388-.388-.388-.963v-.35h7.2v.35q0 .575-.387.963-.388.387-.963.387Zm-1.35-2.7v-5h7.2v5Zm0-6q.225-.875.987-1.65.763-.775 2.113-1v-.275q-.425-.1-.762-.388-.338-.287-.488-.587l-2.6-.725v-.45l2.575-.725q.25-.475.725-.763Q11.425 4.5 12 4.5q.375 0 .7.112.325.113.6.363l2.3-.675v4.4l-2.125-.85q-.2.2-.437.338-.238.137-.538.262v.25q1.225.2 2.062.988.838.787 1.038 1.662ZM12 7.5q.4 0 .7-.3.3-.3.3-.7 0-.425-.3-.713-.3-.287-.7-.287-.425 0-.712.287Q11 6.075 11 6.5t.288.713q.287.287.712.287Z"/>
    </Icon>
  );
});

IconMaterialFireExtinguisherW100.displayName = 'AmauiIconMaterialFireExtinguisherW100';

export default IconMaterialFireExtinguisherW100;
