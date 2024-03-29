import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeatPump = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPump'

      short_name='HeatPump'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18q2.5 0 4.25-1.75T18 12q0-2.5-1.75-4.25T12 6Q9.5 6 7.75 7.75T6 12q0 2.5 1.75 4.25T12 18Zm-.75-2.075q-.425-.075-.787-.237-.363-.163-.713-.388l1.5-1.5Zm1.5 0V13.8l1.5 1.5q-.35.225-.725.388-.375.162-.775.237Zm2.55-1.675-1.5-1.5h2.125q-.075.4-.237.775-.163.375-.388.725Zm-1.5-3 1.5-1.5q.225.35.388.725.162.375.237.775Zm-1.05-1.05V8.075q.425.075.788.237.362.163.712.388ZM12 13q-.425 0-.712-.288Q11 12.425 11 12t.288-.713Q11.575 11 12 11t.713.287Q13 11.575 13 12t-.287.712Q12.425 13 12 13Zm-.75-2.8-1.5-1.5q.35-.225.725-.388.375-.162.775-.237Zm-3.175 1.05q.075-.4.237-.775.163-.375.388-.725l1.5 1.5Zm.625 3q-.225-.35-.388-.725-.162-.375-.237-.775H10.2ZM3 21V3h18v18Zm2-2h14V5H5Zm0 0V5Z"/>
    </Icon>
  );
});

IconMaterialHeatPump.displayName = 'AmauiIconMaterialHeatPump';

export default IconMaterialHeatPump;
