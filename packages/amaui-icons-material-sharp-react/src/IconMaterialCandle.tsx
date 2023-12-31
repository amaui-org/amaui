import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCandle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Candle'

      short_name='Candle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160h480q17 0 28.5-11.5T760-200H200q0 17 11.5 28.5T240-160Zm240-480q-48 0-80-33.5T370-755q2-52 36.5-91.5T480-920q39 34 73.5 73.5T590-755q2 48-30 81.5T480-640Zm-40 360h80v-240h-80v240Zm40-440q13 0 21.5-9t8.5-22q0-17-9.5-31T480-809q-11 13-20.5 27t-9.5 31q0 13 8.5 22t21.5 9Zm330 440q13 0 21.5-8.5T840-310q0-13-8.5-21.5T810-340q-13 0-21.5 8.5T780-310q0 13 8.5 21.5T810-280ZM720-80H240q-50 0-85-35t-35-85v-80h240v-320h240v320h104q-2-8-3-15t-1-15q0-46 32-78t78-32q46 0 78 32t32 78q0 38-22.5 67T840-204v4q0 50-35 85t-85 35Zm-240-80Zm-40-120h80-80Zm40-484Z"/>
    </Icon>
  );
});

IconMaterialCandle.displayName = 'AmauiIconMaterialCandle';

export default IconMaterialCandle;
