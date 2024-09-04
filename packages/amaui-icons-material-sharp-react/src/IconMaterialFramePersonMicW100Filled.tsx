import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFramePersonMicW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonMicW100Filled'

      short_name='FramePersonMic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M433.88-486q-38.88 0-66.38-27.5Q340-541 340-579.88 340-618 367.5-646q27.5-28 66.38-28Q472-674 500-646q28 28 28 66.12 0 38.88-28 66.38-28 27.5-66.12 27.5ZM652-286v-48.71Q618-341 595.5-366T572-426h28q1 27 20.13 45.5 19.14 18.5 46 18.5Q693-362 712-380.5q19-18.5 20-45.5h28q-1 35-23.52 59.93Q713.97-341.14 680-335v49h-28Zm13.97-104Q650-390 639-401.02q-11-11.02-11-26.98v-64q0-15.96 11.03-26.98t27-11.02Q682-530 693-518.98q11 11.02 11 26.98v64q0 15.96-11.03 26.98t-27 11.02ZM132-132v-188h28v160h160v28H132Zm0-508v-188h188v28H160v160h-28Zm508 508v-28h160v-160h28v188H640Zm160-508v-160H640v-28h188v188h-28ZM220-286v-50q0-14.61 7.54-27.48Q235.08-376.35 248-384q51-30 108-41.5t116-6.5v6q0 40 15 77t45 63H220Z"/>
    </Icon>
  );
});

IconMaterialFramePersonMicW100Filled.displayName = 'AmauiIconMaterialFramePersonMicW100Filled';

export default IconMaterialFramePersonMicW100Filled;
