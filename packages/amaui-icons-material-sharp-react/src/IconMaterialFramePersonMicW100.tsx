import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFramePersonMicW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FramePersonMicW100'

      short_name='FramePersonMic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M508-313Zm-288 27v-50q0-14.61 7.54-27.48Q235.08-376.35 248-384q52-31 108-42t116-6v17q0 6 1 11-56-8-116.5 8T248-352v39h260q5 8 11 14.5t13 12.5H220Zm213.88-200q-38.88 0-66.38-27.5Q340-541 340-579.88 340-618 367.5-646q27.5-28 66.38-28Q472-674 500-646q28 28 28 66.12 0 38.88-28 66.38-28 27.5-66.12 27.5Zm.12-28q27 0 46.5-18.97Q500-551.95 500-580q0-27-19.5-46.5t-47-19.5q-27.5 0-46.5 19.5t-19 47q0 27.5 18.98 46.5 18.97 19 47.02 19Zm0-66Zm218 294v-48.71Q618-341 595.5-366T572-426h28q1 27 20.13 45.5 19.14 18.5 46 18.5Q693-362 712-380.5q19-18.5 20-45.5h28q-1 35-23.52 59.93Q713.97-341.14 680-335v49h-28Zm13.97-104Q650-390 639-401.02q-11-11.02-11-26.98v-64q0-15.96 11.03-26.98t27-11.02Q682-530 693-518.98q11 11.02 11 26.98v64q0 15.96-11.03 26.98t-27 11.02ZM132-132v-188h28v160h160v28H132Zm0-508v-188h188v28H160v160h-28Zm508 508v-28h160v-160h28v188H640Zm160-508v-160H640v-28h188v188h-28Z"/>
    </Icon>
  );
});

IconMaterialFramePersonMicW100.displayName = 'AmauiIconMaterialFramePersonMicW100';

export default IconMaterialFramePersonMicW100;
