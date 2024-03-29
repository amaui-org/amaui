import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterVocW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterVocW100Filled'

      short_name='WaterVoc'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15 21.95-.25-.575q-.175-.4-.262-.825-.088-.425-.088-.85 0-.525.138-1.037.137-.513.362-1.013.2-.425.35-.887.15-.463.15-.963 0-.425-.088-.825-.087-.4-.262-.775l-.175-.375.625-.275.25.55q.175.4.263.838.087.437.087.862 0 .525-.137 1.025-.138.5-.363 1-.2.425-.35.9-.15.475-.15.975 0 .4.075.788.075.387.25.737l.225.45Zm3 0-.25-.575q-.175-.4-.262-.825-.088-.425-.088-.85 0-.525.138-1.037.137-.513.362-1.013.2-.425.35-.887.15-.463.15-.963 0-.425-.088-.825-.087-.4-.262-.775l-.175-.375.625-.275.25.55q.175.425.263.85.087.425.087.85 0 .5-.112 1-.113.5-.338.95-.225.475-.387.962-.163.488-.163.988 0 .4.075.788.075.387.25.737l.225.45Zm3 0-.25-.575q-.175-.4-.262-.825-.088-.425-.088-.85 0-.525.138-1.037.137-.513.362-1.013.2-.425.35-.887.15-.463.15-.963 0-.425-.088-.825-.087-.4-.262-.775l-.175-.375.625-.275.25.55q.2.4.275.838.075.437.075.862 0 .5-.112 1-.113.5-.338.95-.225.475-.387.962-.163.488-.163.988 0 .4.075.788.075.387.25.737l.225.45ZM5.3 13.8q0-2.05 1.663-4.563Q8.625 6.725 12 3.7q2.5 2.25 4.05 4.2 1.55 1.95 2.2 3.65H13.9q-.625 0-1.062.437-.438.438-.438 1.063v7.65H12q-2.875 0-4.787-1.975Q5.3 16.75 5.3 13.8Z"/>
    </Icon>
  );
});

IconMaterialWaterVocW100Filled.displayName = 'AmauiIconMaterialWaterVocW100Filled';

export default IconMaterialWaterVocW100Filled;
