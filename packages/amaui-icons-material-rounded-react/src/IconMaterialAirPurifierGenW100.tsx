import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirPurifierGenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirPurifierGenW100'

      short_name='AirPurifierGen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V6.65q0-.975.688-1.663Q5.675 4.3 6.65 4.3H10q.975 0 1.663.687.687.688.687 1.663V19.7Zm6.65-4.05h.7v-6.3h-.7q-.35 0-.575.225-.225.225-.225.575v4.7q0 .35.225.575.225.225.575.225ZM5 19h6.65v-2.65h-.7q-.625 0-1.062-.437-.438-.438-.438-1.063v-4.7q0-.625.438-1.063.437-.437 1.062-.437h.7v-2q0-.675-.487-1.163Q10.675 5 10 5H6.65q-.675 0-1.162.487Q5 5.975 5 6.65Zm11.55-6.075q-.425 0-.85-.1t-.85-.25l.225-.65q.4.15.775.225.375.075.725.075.4 0 .788-.112.387-.113.787-.388.5-.35 1.025-.487.525-.138.975-.138.425 0 .863.088.437.087.862.237l-.25.7q-.525-.175-.8-.25-.275-.075-.675-.075t-.838.125q-.437.125-.937.475-.425.3-.887.412-.463.113-.938.113Zm.025-3.4q-.425 0-.862-.1-.438-.1-.863-.25l.225-.675q.45.15.812.237.363.088.688.088.4 0 .775-.113.375-.112.8-.387.525-.35 1.025-.488.5-.137.975-.137.425 0 .85.087.425.088.875.238l-.25.7q-.45-.15-.8-.238-.35-.087-.675-.087-.425 0-.85.125t-.95.5q-.35.25-.825.375t-.95.125Zm0 6.8q-.425 0-.862-.1-.438-.1-.863-.25l.225-.675q.4.125.788.225.387.1.712.1.4 0 .775-.113.375-.112.8-.387.5-.35 1.05-.488.55-.137.975-.137.4 0 .838.087.437.088.862.238l-.225.7q-.45-.15-.825-.238-.375-.087-.675-.087-.425 0-.887.15-.463.15-.913.475-.35.25-.812.375-.463.125-.963.125ZM5 19h6.65H5Z"/>
    </Icon>
  );
});

IconMaterialAirPurifierGenW100.displayName = 'AmauiIconMaterialAirPurifierGenW100';

export default IconMaterialAirPurifierGenW100;
