import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialProcedure = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Procedure'

      short_name='Procedure'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M760 536q-38 0-81-21.5T599 455q-37-38-58.5-81T519 294q0-17 5-31t15-24q26-26 105.5-45.5T794 177q25 2 41.5 6t24.5 12q7 7 11.5 21.5T878 253q5 69-14 152t-46 110q-10 10-25.5 15.5T760 536Zm35-200q2-18 3-38t2-42q-20-1-40.5.5T719 260q11 8 21.5 17t19.5 18q10 10 18.5 20t16.5 21Zm-35 120q1-20-15-49.5T703 352q-25-25-53.5-40.5T601 296q2 23 17 52t37 51q24 24 52.5 39.5T760 456Zm92 388L664 656H264L52 444l56-56 188 188h400l212 212-56 56ZM320 976V816q0-33 23.5-56.5T400 736h160q33 0 56.5 23.5T640 816v160H320Zm80-80h160v-80H400v80Zm0 0v-80 80Z"/>
    </Icon>
  );
});

IconMaterialProcedure.displayName = 'AmauiIconMaterialProcedure';

export default IconMaterialProcedure;
