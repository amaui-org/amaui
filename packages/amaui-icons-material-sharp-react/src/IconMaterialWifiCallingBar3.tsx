import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWifiCallingBar3 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiCallingBar3'

      short_name='WifiCallingBar3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M798-120q-125 0-247.5-54T328-328Q228-428 174-550t-54-248v-42h236l37 201-114 115q22 39 49 74t58 65q29 29 63.5 55.5T524-280l116-116 200 41v235h-42ZM241-600l66-66-17-94h-89q5 45 15 84.5t25 75.5Zm358 358q40 17 80.5 27t80.5 13v-88l-94-19-67 67ZM241-600Zm358 358Zm61-279q-17 0-28.5-11.5T620-561q0-17 11.5-28.5T660-601q17 0 28.5 11.5T700-561q0 17-11.5 28.5T660-521Zm-100-98-42-42q29-29 65.5-44.5T660-721q40 0 76.5 15.5T802-661l-42 42q-20-20-45.5-31T660-661q-29 0-54.5 11T560-619Zm-84-86-42-42q45-45 103.5-69.5T660-841q64 0 122.5 24.5T886-747l-42 42q-37-37-84.5-56.5T660-781q-52 0-99 20t-85 56Z"/>
    </Icon>
  );
});

IconMaterialWifiCallingBar3.displayName = 'AmauiIconMaterialWifiCallingBar3';

export default IconMaterialWifiCallingBar3;
