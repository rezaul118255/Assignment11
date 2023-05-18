import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Cateory = () => {
    return (
        <div className='text-center'>
            <Tabs>
                <TabList className="flex mx-auto gap-4">
                    <Tab>Science Kits</Tab>
                    <Tab>Math Learning Toys</Tab>
                    <Tab>Engineering Kits</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Cateory;