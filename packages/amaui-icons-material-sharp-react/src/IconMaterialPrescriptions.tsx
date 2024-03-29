import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrescriptions = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Prescriptions'

      short_name='Prescriptions'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.95 20.65 1.15-1.15-1.6-1.6-1.15 1.15q-.35.35-.35.8 0 .45.35.8.35.35.8.35.45 0 .8-.35Zm2.55-2.55 1.15-1.15q.35-.35.35-.8 0-.45-.35-.8-.35-.35-.8-.35-.45 0-.8.35L17.9 16.5Zm-1.125 3.975Q17.45 23 16.15 23t-2.225-.925Q13 21.15 13 19.85t.925-2.225l3.7-3.7Q18.55 13 19.85 13t2.225.925Q23 14.85 23 16.15t-.925 2.225ZM5 19V24.65 19Zm6.125 2H3V3h6.2q.325-.9 1.088-1.45Q11.05 1 12 1t1.713.55Q14.475 2.1 14.8 3H21v8.125Q20.5 11 20 11t-1 .075V5H5v14h6.075Q11 19.5 11 20t.125 1ZM12 4.25q.325 0 .538-.213.212-.212.212-.537 0-.325-.212-.538-.213-.212-.538-.212-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213ZM7 9V7h10v2Zm0 4v-2h10v.85q-.2.125-.387.287-.188.163-.388.363l-.5.5Zm0 4v-2h6.725L12.5 16.225q-.2.2-.362.388-.163.187-.288.387Z"/>
    </Icon>
  );
});

IconMaterialPrescriptions.displayName = 'AmauiIconMaterialPrescriptions';

export default IconMaterialPrescriptions;
