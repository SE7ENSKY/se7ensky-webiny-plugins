// @flow
import React from 'react';
import type {PbElementPluginType} from '@webiny/app-page-builder/types';
import {Tab} from '@webiny/ui/Tabs';
import {Cell, Grid} from '@webiny/ui/Grid';
import {Input} from '@webiny/ui/Input';
import styled from '@emotion/styled';
import SingleImageUpload from '@webiny/app-admin/components/SingleImageUpload';

import render from '../render';

const MapThumb = styled ('div') ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});

const MapAdminView = styled ('div') ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '250px',
  backgroundColor: '#f2f2f2',
});

const PreviewBox = styled ('div') ({
  textAlign: 'center',
  margin: '0 auto',
  width: 40,
  svg: {
    width: 40,
    height: 40,
  },
});

export default ({groupName, ...params}) => [
  ...render,
  {
    name: 'pb-page-element-custom-google-map',
    type: 'pb-page-element',
    elementType: 'custom-google-map',
    toolbar: {
      title: 'Google map',
      group: groupName ? groupName : 'pb-editor-element-group-basic',
      preview () {
        return (
          <PreviewBox>
            <MapThumb>
              <svg
                width="97"
                height="83"
                viewBox="0 0 97 83"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#000" fillRule="nonzero">
                  <path d="M95.5 78.8l-5.1-39.8c-.1-.9-.8-1.8-1.7-2.1l-8.6-3.1-2.4 4.6 7.7 2.8 4.4 34.3-18.3-5.9-1.3-20.2c-.9.4-1.9.6-3 .6-.7 0-1.5-.1-2.1-.3l1.3 20-16 5.8v-34.5l6.4-2.6-2.4-4.6-6.4 2.7-17.6-7.3c-.6-.2-1.3-.3-1.9-.1l-21.2 7.8c-.9.3-1.5 1.1-1.7 2.1l-5.1 39.8c-.1.9.2 1.7.9 2.3.7.6 1.6.7 2.4.5l22.9-7.4 20.4 7.4c.6.2 1.2.2 1.7 0l20.4-7.4 22.9 7.4c.3.1.5.1.8.1.6 0 1.2-.2 1.6-.6.7-.6 1.1-1.4 1-2.3zm-71.1-9.2l-18.3 5.9 4.4-34.3 16.1-5.8-2.2 34.2zm21 5.9l-16-5.8 2.2-34.4 13.8 5.7v34.5zM65.4 43.7c.8 1.6 3.1 1.6 3.9 0 0 0 9.1-17.8 11.2-22 2.1-4.2 2.2-8.9 0-13.3-3.6-7.3-12.5-10.2-19.8-6.5-7.3 3.7-10.1 12.8-6.5 19.8 3.6 7 11.2 22 11.2 22zm2-35.4c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7c0-3.8 3.1-7 7-7z" />
                </g>
              </svg>
            </MapThumb>
          </PreviewBox>
        );
      },
    },
    settings: ['pb-page-element-settings-delete'],
    target: ['column'],
    onCreate: 'open-settings',
    create (options = {}) {
      return {
        type: 'custom-google-map',
        data: {},
        ...options,
      };
    },
    render({element}: Object) {
      return <MapAdminView>Google map</MapAdminView>;
    },
  },
  {
    name: 'pb-page-element-advanced-settings-custom-google-map',
    type: 'pb-page-element-advanced-settings',
    elementType: 'custom-google-map',
    render({Bind}) {
      return (
        <Tab label="Map settings">
          <Grid>
            <Cell span={6}>
              <Bind name={'map.key'}>
                <Input
                  label={'Google map api key *'}
                  description={'Enter a map api key'}
                />
              </Bind>
            </Cell>
            <Cell span={6}>
              <Bind name={'map.zoom'}>
                <Input label={'Map zoom *'} description={'Enter a map zoom'} />
              </Bind>
            </Cell>
          </Grid>
          <Grid>
            <Cell span={6}>
              <Bind name={'map.lat'}>
                <Input
                  label={'Map center latitude *'}
                  description={'Enter a map center latitude'}
                />
              </Bind>
            </Cell>
            <Cell span={6}>
              <Bind name={'map.lng'}>
                <Input
                  label={'Map center longitude *'}
                  description={'Enter a map center longitude'}
                />
              </Bind>
            </Cell>
          </Grid>
          <Grid>
            <Cell span={4}>
              <Bind name={'map.pin'}>
                <SingleImageUpload label="Map pin" />
              </Bind>
            </Cell>
            <Cell span={2} />
            <Cell span={6}>
              <Grid>
                <Cell span={6}>
                  <Bind name={'map.pinLat'}>
                    <Input
                      label={'Pin latitude'}
                      description={'Enter a pin latitude'}
                    />
                  </Bind>
                </Cell>
                <Cell span={6}>
                  <Bind name={'map.pinLng'}>
                    <Input
                      label={'Pin longitude'}
                      description={'Enter a pin longitude'}
                    />
                  </Bind>
                </Cell>
                <Cell span={6}>
                  <Bind name={'map.pinWidth'}>
                    <Input
                      label={'Pin width'}
                      description={'Enter a pin image width (px)'}
                    />
                  </Bind>
                </Cell>
                <Cell span={6}>
                  <Bind name={'map.pinHeight'}>
                    <Input
                      label={'Pin height'}
                      description={'Enter a pin image height (px)'}
                    />
                  </Bind>
                </Cell>
              </Grid>
            </Cell>
          </Grid>
        </Tab>
      );
    },
  },
];
