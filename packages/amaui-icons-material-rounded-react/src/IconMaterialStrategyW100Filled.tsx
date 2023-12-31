import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStrategyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrategyW100Filled'

      short_name='Strategy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m231-536-84-48q-6.75-3.714-10.875-10.771Q132-601.829 132-610v-96q0-8.171 4.125-15.229Q140.25-728.286 147-732l84-48q6.677-4 14.839-4Q254-784 261-780l84 48q6.75 3.714 10.875 10.771Q360-714.171 360-706v96q0 8.171-4.125 15.229Q351.75-587.714 345-584l-84 48q-6.677 4-14.839 4Q238-532 231-536Zm417 122v-151l70 41q14.25 8.13 22.125 21.435Q748-489.261 748-473v182q0 16.261-7.875 29.565Q732.25-248.13 718-240l-154 90q-14.328 8-30.164 8Q518-142 504-150l-154-90q-14.25-8.13-22.125-21.435Q320-274.739 320-291v-182q0-16.261 7.875-29.565Q335.75-515.87 350-524l70-41v151q0 47.88 33.085 80.94 33.084 33.06 81 33.06Q582-300 615-333.06q33-33.06 33-80.94ZM548-640v226q0 5.95-4.035 9.975-4.035 4.025-10 4.025T524-404.025q-4-4.025-4-9.975v-384q0-12.75 8.625-21.375T550-828h222q17.5 0 26.25 16T797-781l-20 30q-5 7.647-5 16.823Q772-725 777-717l20 30q10 15 1.25 31T772-640H548Z"/>
    </Icon>
  );
});

IconMaterialStrategyW100Filled.displayName = 'AmauiIconMaterialStrategyW100Filled';

export default IconMaterialStrategyW100Filled;
