import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWeekendW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WeekendW100'

      short_name='Weekend'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 8.1q0-.725.488-1.213Q4.975 6.4 5.7 6.4h12.6q.725 0 1.213.487Q20 7.375 20 8.1v1.5q.725 0 1.213.487.487.488.487 1.213v5q0 .725-.487 1.212Q20.725 18 20 18H4q-.725 0-1.212-.488Q2.3 17.025 2.3 16.3v-5q0-.725.488-1.213Q3.275 9.6 4 9.6Zm.7 0v1.65q.45.2.725.625.275.425.275.925v2.65h12.6V11.3q0-.5.275-.925.275-.425.725-.625V8.1q0-.425-.287-.713-.288-.287-.713-.287H5.7q-.425 0-.712.287-.288.288-.288.713ZM19 14.65H5V11.3q0-.2-.075-.388-.075-.187-.212-.325-.138-.137-.325-.212Q4.2 10.3 4 10.3q-.425 0-.712.287Q3 10.875 3 11.3v5q0 .425.288.713.287.287.712.287h16q.425 0 .712-.287.288-.288.288-.713v-5q0-.425-.288-.713-.287-.287-.712-.287-.2 0-.387.075-.188.075-.325.212-.138.138-.213.325Q19 11.1 19 11.3Zm-7 0Zm0 2.65Zm0-3.35Z"/>
    </Icon>
  );
});

IconMaterialWeekendW100.displayName = 'AmauiIconMaterialWeekendW100';

export default IconMaterialWeekendW100;
