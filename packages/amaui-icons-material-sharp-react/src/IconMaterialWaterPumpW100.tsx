import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterPumpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPumpW100'

      short_name='WaterPump'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-280h224q-32-18-57.5-45T272-386H146v106Zm334 0q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm208-294h126v-106H590q32 18 57.5 45t40.5 61ZM118-224v-218h28v28h116q-5-16-7.5-32.5T252-480q0-95.271 66.364-161.636Q384.729-708 480-708h334v-28h28v218h-28v-28H698q5 16 7.5 32.5T708-480q0 95.271-66.364 161.636Q575.271-252 480-252H146v28h-28Zm362.056-173Q449-397 427.5-418.445 406-439.891 406-470.21q0-14.79 5.55-27.584t15.91-23.03L480-572l52.54 51.176q10.36 10.236 15.91 23.03Q554-485 554-470.21q0 30.319-21.444 51.765Q511.113-397 480.056-397ZM146-280v-106 106Zm668-294v-106 106Zm-334 94Z"/>
    </Icon>
  );
});

IconMaterialWaterPumpW100.displayName = 'AmauiIconMaterialWaterPumpW100';

export default IconMaterialWaterPumpW100;
