import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWeatherMixW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeatherMixW100'

      short_name='WeatherMix'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M529.118-96Q515-96 505-105.508q-10-9.509-10-23.492 0-6.353 2-12.176 2-5.824 7.294-10.59L529-175l24.706 23.234Q559-147 561-141.034q2 5.966 2 12.475 0 13.559-9.882 23.059-9.883 9.5-24 9.5ZM391-151l-21-21 97-97 21 21-97 97Zm258-60-39-39 39-39 39 39-39 39Zm-360 0-39-39 39-39 39 39-39 39Zm11-135q-81 0-137.5-56.5T106-540q0-76 51.5-131T287-734q29.091-56.066 79.545-88.033Q417-854 479.615-854 565-854 625.5-797 686-740 695-655q75 4 117 49.5t42 105.801Q854-436 809.083-391 764.167-346 700-346H300Zm0-28h400q52 0 89-37t37-89q0-52-37-89t-89-37h-34v-14q0-76.725-54.683-131.362Q556.635-826 479.846-826q-55.846 0-101.73 30.333Q332.232-765.333 309-714l-3.143 8H298q-67.739 2.371-115.87 50.393Q134-607.586 134-540q0 68.771 48.614 117.386Q231.229-374 300-374Zm180-226Z"/>
    </Icon>
  );
});

IconMaterialWeatherMixW100.displayName = 'AmauiIconMaterialWeatherMixW100';

export default IconMaterialWeatherMixW100;
